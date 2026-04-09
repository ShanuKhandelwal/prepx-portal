/**
 * Local auth service using IndexedDB (persistent, browser-based storage).
 * Stores users and registrations without requiring Firebase or a backend.
 */

import { db as indexedDB, initDB } from "./indexedDB";

// Ensure IndexedDB is initialized
let dbInitialized = false;

async function ensureDBInit() {
  if (!dbInitialized) {
    await initDB();
    dbInitialized = true;
  }
}

/**
 * Sign up a new user.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{uid: string, email: string}>}
 */
export async function signup(email, password) {
  await ensureDBInit();

  if (!email || !password) {
    throw new Error("Email and password are required");
  }
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }

  const existingUser = await indexedDB.getUser(email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Generate simple uid
  const uid = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const user = {
    uid,
    email,
    password, // WARNING: storing plain text password for demo only. Use hashing in production.
    createdAt: new Date().toISOString(),
    registrationId: null,
  };

  await indexedDB.putUser(user);
  localStorage.setItem("prepx_current_user", JSON.stringify({ uid, email }));
  return { uid, email };
}

/**
 * Log in a user.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{uid: string, email: string}>}
 */
export async function login(email, password) {
  await ensureDBInit();

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await indexedDB.getUser(email);

  if (!user || user.password !== password) {
    throw new Error("Invalid email or password");
  }

  localStorage.setItem("prepx_current_user", JSON.stringify({ uid: user.uid, email: user.email }));
  return { uid: user.uid, email: user.email };
}

/**
 * Get current logged-in user.
 * @returns {Promise<{uid: string, email: string} | null>}
 */
export async function getCurrentUser() {
  const userJson = localStorage.getItem("prepx_current_user");
  if (!userJson) return null;
  return JSON.parse(userJson);
}

/**
 * Log out current user.
 * @returns {Promise<void>}
 */
export async function logout() {
  localStorage.removeItem("prepx_current_user");
}

/**
 * Register a candidate.
 * @param {string} uid
 * @param {string} name
 * @param {string} dob
 * @returns {Promise<{registrationId: string}>}
 */
export async function registerCandidate(uid, name, dob) {
  await ensureDBInit();

  if (!name || !dob) {
    throw new Error("Name and date of birth are required");
  }

  const registrationId = `reg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const registration = {
    registrationId,
    uid,
    name,
    dob,
    createdAt: new Date().toISOString(),
  };

  await indexedDB.putRegistration(registration);

  // Update user's registrationId
  const user = await indexedDB.getUserByUid(uid);
  if (user) {
    user.registrationId = registrationId;
    await indexedDB.putUser(user);

    // Update current user in localStorage
    const currentUser = JSON.parse(localStorage.getItem("prepx_current_user") || "{}");
    currentUser.registrationId = registrationId;
    localStorage.setItem("prepx_current_user", JSON.stringify(currentUser));
  }

  return { registrationId };
}

/**
 * Get registration data by id.
 * @param {string} registrationId
 * @returns {Promise<{registrationId: string, uid: string, name: string, dob: string} | null>}
 */
export async function getRegistration(registrationId) {
  await ensureDBInit();
  return await indexedDB.getRegistration(registrationId);
}

/**
 * Get current user's registration status.
 * @returns {Promise<string | null>}
 */
export async function getRegistrationId() {
  await ensureDBInit();
  const user = await getCurrentUser();
  if (!user) return null;
  const fullUser = await indexedDB.getUserByUid(user.uid);
  return fullUser?.registrationId || null;
}
