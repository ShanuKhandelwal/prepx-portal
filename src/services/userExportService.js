/**
 * User Export Service
 * Automatically saves user details to a file when they create an account
 * Stores: email, password, registration date, and registration details
 */

import { db } from './indexedDB.js';

/**
 * Generate CSV content from all users and registrations
 * @returns {Promise<string>} CSV formatted data
 */
export async function generateUserCSV() {
  try {
    // Get all users and registrations from IndexedDB
    const users = await getAllUsers();
    const registrations = await getAllRegistrations();

    // Create lookup map for registrations
    const regMap = {};
    registrations.forEach(reg => {
      regMap[reg.uid] = reg;
    });

    // Create CSV header
    let csv = 'Email,Password,UID,Name,Date of Birth,Account Created Date,Registered Date\n';

    // Add each user to CSV
    users.forEach(user => {
      const reg = regMap[user.uid] || {};
      const email = escapeCsvField(user.email);
      const password = escapeCsvField(user.password);
      const uid = escapeCsvField(user.uid);
      const name = escapeCsvField(reg.name || 'Not Registered');
      const dob = escapeCsvField(reg.dob || '');
      const createdAt = escapeCsvField(user.createdAt || '');
      const regDate = escapeCsvField(reg.createdAt || '');

      csv += `${email},${password},${uid},${name},${dob},${createdAt},${regDate}\n`;
    });

    return csv;
  } catch (error) {
    console.error('Error generating CSV:', error);
    throw error;
  }
}

/**
 * Generate formatted text file content
 * @returns {Promise<string>} Formatted text data
 */
export async function generateUserTextFile() {
  try {
    const users = await getAllUsers();
    const registrations = await getAllRegistrations();

    const regMap = {};
    registrations.forEach(reg => {
      regMap[reg.uid] = reg;
    });

    let textContent = '';
    textContent += '════════════════════════════════════════════════════════════\n';
    textContent += '                    Evalo USER ACCOUNTS                    \n';
    textContent += '════════════════════════════════════════════════════════════\n';
    textContent += `Generated: ${new Date().toLocaleString()}\n`;
    textContent += `Total Users: ${users.length}\n`;
    textContent += '════════════════════════════════════════════════════════════\n\n';

    users.forEach((user, index) => {
      const reg = regMap[user.uid] || {};
      textContent += `USER #${index + 1}\n`;
      textContent += '─────────────────────────────────────────────\n';
      textContent += `Email:           ${user.email}\n`;
      textContent += `Password:        ${user.password}\n`;
      textContent += `UID:             ${user.uid}\n`;
      if (reg.name) textContent += `Name:            ${reg.name}\n`;
      if (reg.dob) textContent += `Date of Birth:   ${reg.dob}\n`;
      textContent += `Account Created: ${new Date(user.createdAt).toLocaleString()}\n`;
      if (reg.createdAt) {
        textContent += `Registered On:   ${new Date(reg.createdAt).toLocaleString()}\n`;
      }
      textContent += '\n';
    });

    textContent += '════════════════════════════════════════════════════════════\n';
    textContent += '                    END OF USERS LIST                       \n';
    textContent += '════════════════════════════════════════════════════════════\n';

    return textContent;
  } catch (error) {
    console.error('Error generating text file:', error);
    throw error;
  }
}

/**
 * Generate JSON format
 * @returns {Promise<string>} JSON formatted data
 */
export async function generateUserJSON() {
  try {
    const users = await getAllUsers();
    const registrations = await getAllRegistrations();

    const regMap = {};
    registrations.forEach(reg => {
      regMap[reg.uid] = reg;
    });

    const userList = users.map(user => ({
      email: user.email,
      password: user.password,
      uid: user.uid,
      registrationId: user.registrationId,
      name: regMap[user.uid]?.name || null,
      dob: regMap[user.uid]?.dob || null,
      accountCreated: user.createdAt,
      registeredOn: regMap[user.uid]?.createdAt || null
    }));

    return JSON.stringify({
      generatedAt: new Date().toISOString(),
      totalUsers: userList.length,
      users: userList
    }, null, 2);
  } catch (error) {
    console.error('Error generating JSON:', error);
    throw error;
  }
}

/**
 * Get all users from IndexedDB
 * @private
 * @returns {Promise<Array>} All users
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
 * @returns {Promise<Array>} All registrations
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
 * Escape special characters in CSV fields
 * @private
 * @param {string} field Field to escape
 * @returns {string} Escaped field
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
 * Download data as file (client-side)
 * @param {string} content File content
 * @param {string} filename Filename to save as
 * @param {string} mimeType MIME type
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

/**
 * Download as CSV
 * @returns {Promise<void>}
 */
export async function downloadAsCSV() {
  try {
    const csv = await generateUserCSV();
    const filename = `Evalo_Users_${new Date().toISOString().split('T')[0]}.csv`;
    downloadFile(csv, filename, 'text/csv');
  } catch (error) {
    console.error('Error downloading CSV:', error);
    throw error;
  }
}

/**
 * Download as TXT
 * @returns {Promise<void>}
 */
export async function downloadAsText() {
  try {
    const text = await generateUserTextFile();
    const filename = `Evalo_Users_${new Date().toISOString().split('T')[0]}.txt`;
    downloadFile(text, filename, 'text/plain');
  } catch (error) {
    console.error('Error downloading text file:', error);
    throw error;
  }
}

/**
 * Download as JSON
 * @returns {Promise<void>}
 */
export async function downloadAsJSON() {
  try {
    const json = await generateUserJSON();
    const filename = `Evalo_Users_${new Date().toISOString().split('T')[0]}.json`;
    downloadFile(json, filename, 'application/json');
  } catch (error) {
    console.error('Error downloading JSON file:', error);
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
    throw error;
  }
}

/**
 * Get user details by email
 * @param {string} email User email
 * @returns {Promise<Object|null>} User details with registration
 */
export async function getUserDetails(email) {
  try {
    const user = await db.getUser(email);
    if (!user) return null;

    const registrations = await db.getRegistrationsByUid(user.uid);
    const registration = registrations.length > 0 ? registrations[0] : null;

    return {
      ...user,
      registration
    };
  } catch (error) {
    console.error('Error getting user details:', error);
    throw error;
  }
}

export const userExportService = {
  generateUserCSV,
  generateUserTextFile,
  generateUserJSON,
  downloadAsCSV,
  downloadAsText,
  downloadAsJSON,
  getUserCount,
  getUserDetails
};
