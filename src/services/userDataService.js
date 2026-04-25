/**
 * Unified User Data Service
 * Displays users on portal + downloads as single file (CSV)
 * Shows up to 50 entries directly, auto-loads more if needed
 */

import { db } from './indexedDB.js';

/**
 * Get all users with their registrations combined
 * @returns {Promise<Array>} Array of combined user objects
 */
export async function getAllUsersWithData() {
  try {
    const users = await getAllUsers();
    const registrations = await getAllRegistrations();

    // Create lookup map for registrations
    const regMap = {};
    registrations.forEach(reg => {
      regMap[reg.uid] = reg;
    });

    // Combine user and registration data
    return users.map(user => ({
      email: user.email,
      password: user.password,
      uid: user.uid,
      name: regMap[user.uid]?.name || '-',
      dob: regMap[user.uid]?.dob || '-',
      accountCreated: new Date(user.createdAt).toLocaleString(),
      registered: regMap[user.uid] ? 'Yes' : 'No',
      registeredDate: regMap[user.uid]?.createdAt ? new Date(regMap[user.uid].createdAt).toLocaleString() : '-'
    }));
  } catch (error) {
    console.error('Error getting all users:', error);
    return [];
  }
}

/**
 * Get paginated users (for display in portal)
 * @param {number} page Page number (starts at 1)
 * @param {number} pageSize Items per page (default 50)
 * @returns {Promise<Object>} {users, totalCount, totalPages, currentPage}
 */
export async function getPaginatedUsers(page = 1, pageSize = 50) {
  try {
    const allUsers = await getAllUsersWithData();
    const totalCount = allUsers.length;
    const totalPages = Math.ceil(totalCount / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const users = allUsers.slice(startIndex, endIndex);

    return {
      users,
      totalCount,
      totalPages,
      currentPage: page,
      pageSize,
      hasMore: page < totalPages
    };
  } catch (error) {
    console.error('Error getting paginated users:', error);
    return {
      users: [],
      totalCount: 0,
      totalPages: 0,
      currentPage: 1,
      pageSize: 50,
      hasMore: false
    };
  }
}

/**
 * Generate CSV content with all users
 * @returns {Promise<string>} CSV formatted data
 */
export async function generateCSV() {
  try {
    const allUsers = await getAllUsersWithData();

    // Create CSV header
    let csv = 'Email,Password,UID,Name,Date of Birth,Account Created,Registered,Registered Date\n';

    // Add each user to CSV
    allUsers.forEach(user => {
      const email = escapeCsvField(user.email);
      const password = escapeCsvField(user.password);
      const uid = escapeCsvField(user.uid);
      const name = escapeCsvField(user.name);
      const dob = escapeCsvField(user.dob);
      const created = escapeCsvField(user.accountCreated);
      const reg = escapeCsvField(user.registered);
      const regDate = escapeCsvField(user.registeredDate);

      csv += `${email},${password},${uid},${name},${dob},${created},${reg},${regDate}\n`;
    });

    return csv;
  } catch (error) {
    console.error('Error generating CSV:', error);
    throw error;
  }
}

/**
 * Download all data as single CSV file
 * @returns {Promise<void>}
 */
export async function downloadAsCSV() {
  try {
    const csv = await generateCSV();
    const filename = `Evalo_Users_${new Date().toISOString().split('T')[0]}.csv`;
    downloadFile(csv, filename, 'text/csv');
  } catch (error) {
    console.error('Error downloading CSV:', error);
    throw error;
  }
}

/**
 * Get user count
 * @returns {Promise<number>} Number of users
 */
export async function getUserCount() {
  try {
    const users = await getAllUsers();
    return users.length;
  } catch (error) {
    console.error('Error getting user count:', error);
    return 0;
  }
}

/**
 * Get all users from IndexedDB
 * @private
 */
async function getAllUsers() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('Evalo_db');

    request.onsuccess = () => {
      const database = request.result;
      const transaction = database.transaction(['users'], 'readonly');
      const store = transaction.objectStore('users');
      const getAllRequest = store.getAll();

      getAllRequest.onsuccess = () => {
        resolve(getAllRequest.result);
      };
      getAllRequest.onerror = () => {
        reject(getAllRequest.error);
      };
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

/**
 * Get all registrations from IndexedDB
 * @private
 */
async function getAllRegistrations() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('Evalo_db');

    request.onsuccess = () => {
      const database = request.result;
      const transaction = database.transaction(['registrations'], 'readonly');
      const store = transaction.objectStore('registrations');
      const getAllRequest = store.getAll();

      getAllRequest.onsuccess = () => {
        resolve(getAllRequest.result);
      };
      getAllRequest.onerror = () => {
        reject(getAllRequest.error);
      };
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

/**
 * Escape CSV fields
 * @private
 */
function escapeCsvField(field) {
  if (!field) return '';
  const str = String(field);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/**
 * Download file
 * @private
 */
export function downloadFile(content, filename, mimeType = 'text/plain') {
  try {
    const blob = new Blob([content], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    console.log(`File downloaded: ${filename}`);
  } catch (error) {
    console.error('Error downloading file:', error);
    throw error;
  }
}

export const userDataService = {
  getAllUsersWithData,
  getPaginatedUsers,
  generateCSV,
  downloadAsCSV,
  getUserCount
};
