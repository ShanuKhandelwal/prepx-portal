/**
 * IndexedDB-based database service.
 * Provides persistent storage for users and registrations in the browser.
 * Data survives browser restarts and works offline.
 */

const DB_NAME = "Evalo_db";
const DB_VERSION = 1;
const USERS_STORE = "users";
const REGISTRATIONS_STORE = "registrations";

let idbInstance = null;

/**
 * Initialize the IndexedDB database.
 * @returns {Promise<IDBDatabase>}
 */
export async function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      idbInstance = request.result;
      resolve(idbInstance);
    };

    request.onupgradeneeded = (event) => {
      const database = event.target.result;

      // Create users object store
      if (!database.objectStoreNames.contains(USERS_STORE)) {
        const userStore = database.createObjectStore(USERS_STORE, { keyPath: "email" });
        userStore.createIndex("uid", "uid", { unique: true });
      }

      // Create registrations object store
      if (!database.objectStoreNames.contains(REGISTRATIONS_STORE)) {
        const regStore = database.createObjectStore(REGISTRATIONS_STORE, { keyPath: "registrationId" });
        regStore.createIndex("uid", "uid", { unique: false });
      }
    };
  });
}

/**
 * Ensure DB is initialized.
 */
async function ensureDB() {
  if (!idbInstance) {
    await initDB();
  }
  return idbInstance;
}

/**
 * Add or update a user.
 * @param {Object} user
 */
async function putUser(user) {
  const database = await ensureDB();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([USERS_STORE], "readwrite");
    const store = transaction.objectStore(USERS_STORE);
    const request = store.put(user);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

/**
 * Get a user by email.
 * @param {string} email
 */
async function getUser(email) {
  const database = await ensureDB();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([USERS_STORE], "readonly");
    const store = transaction.objectStore(USERS_STORE);
    const request = store.get(email);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

/**
 * Get a user by uid.
 * @param {string} uid
 */
async function getUserByUid(uid) {
  const database = await ensureDB();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([USERS_STORE], "readonly");
    const store = transaction.objectStore(USERS_STORE);
    const index = store.index("uid");
    const request = index.get(uid);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

/**
 * Add or update a registration.
 * @param {Object} registration
 */
async function putRegistration(registration) {
  const database = await ensureDB();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([REGISTRATIONS_STORE], "readwrite");
    const store = transaction.objectStore(REGISTRATIONS_STORE);
    const request = store.put(registration);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

/**
 * Get a registration by id.
 * @param {string} registrationId
 */
async function getRegistration(registrationId) {
  const database = await ensureDB();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([REGISTRATIONS_STORE], "readonly");
    const store = transaction.objectStore(REGISTRATIONS_STORE);
    const request = store.get(registrationId);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

/**
 * Get all registrations for a user.
 * @param {string} uid
 */
async function getRegistrationsByUid(uid) {
  const database = await ensureDB();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([REGISTRATIONS_STORE], "readonly");
    const store = transaction.objectStore(REGISTRATIONS_STORE);
    const index = store.index("uid");
    const request = index.getAll(uid);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

/**
 * Delete a user.
 * @param {string} email
 */
async function deleteUser(email) {
  const database = await ensureDB();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([USERS_STORE], "readwrite");
    const store = transaction.objectStore(USERS_STORE);
    const request = store.delete(email);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

/**
 * Clear all data from the database.
 */
async function clearAll() {
  const database = await ensureDB();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction([USERS_STORE, REGISTRATIONS_STORE], "readwrite");

    const usersStore = transaction.objectStore(USERS_STORE);
    const regsStore = transaction.objectStore(REGISTRATIONS_STORE);

    usersStore.clear();
    regsStore.clear();

    transaction.onerror = () => reject(transaction.error);
    transaction.oncomplete = () => resolve();
  });
}

export const db = {
  putUser,
  getUser,
  getUserByUid,
  putRegistration,
  getRegistration,
  getRegistrationsByUid,
  deleteUser,
  clearAll,
  initDB,
};