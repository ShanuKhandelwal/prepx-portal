/**
 * DATA STORAGE ARCHITECTURE GUIDE
 * 
 * This document explains where and how data is stored in the PrepX portal.
 */

// =====================================================================
// 1. INDEXEDDB (Persistent Browser Database)
// =====================================================================
// Location: src/services/indexedDB.js
// 
// What it stores:
//   - Users (email, uid, password, registrationId, createdAt)
//   - Registrations (registrationId, uid, name, dob, createdAt)
// 
// Why IndexedDB?
//   - Persistent (survives browser restart)
//   - Larger storage capacity (~50MB+)
//   - Structured data storage
//   - Works offline
// 
// How it works:
//   - Opens database: "prepx_db"
//   - Creates object stores (tables):
//     * "users" - stores user accounts (keyPath: email)
//     * "registrations" - stores registration records (keyPath: registrationId)
//   - Uses indexes for quick lookups (by uid)
// 
// Storage Details:
//   ┌─────────────────────────────────────────┐
//   │         IndexedDB: prepx_db             │
//   ├─────────────────────────────────────────┤
//   │ Table: users                            │
//   │ ├─ email (primary key)                  │
//   │ ├─ uid (indexed)                        │
//   │ ├─ password (plain text - demo only)    │
//   │ ├─ registrationId                       │
//   │ └─ createdAt                            │
//   │                                         │
//   │ Table: registrations                    │
//   │ ├─ registrationId (primary key)         │
//   │ ├─ uid (indexed)                        │
//   │ ├─ name                                 │
//   │ ├─ dob                                  │
//   │ └─ createdAt                            │
//   └─────────────────────────────────────────┘

// =====================================================================
// 2. LOCALSTORAGE (Session Storage)
// =====================================================================
// Location: Browser's localStorage (key-value pairs)
// 
// What it stores:
//   - prepx_current_user: Currently logged-in user (email + uid)
// 
// Why localStorage?
//   - Quick access to session state
//   - Fast for checking if user is logged in
//   - Cleared on logout
// 
// How it's used:
//   - Set after successful signup/login
//   - Cleared on logout
//   - Read by AuthProvider to check authentication state
// 
// Storage Structure:
//   localStorage = {
//     "prepx_current_user": {
//       "uid": "user_1712345678_abc123",
//       "email": "user@example.com",
//       "registrationId": "reg_1712345678_xyz789"  // if registered
//     }
//   }

// =====================================================================
// 3. CODE FLOW: WHERE DATA IS STORED
// =====================================================================

// SIGNUP FLOW:
// ────────────
// 1. User fills signup form (Signup.jsx)
// 2. Calls authService.signup(email, password)
// 3. signup() function:
//    - Ensures IndexedDB is initialized
//    - Checks if user already exists in IndexedDB
//    - Creates user object with uid, email, password, etc.
//    - STORES in IndexedDB (putUser)
//    - STORES session in localStorage (prepx_current_user)
// 4. Returns { uid, email }
// 5. Redirects to registration page

// Code location: src/services/authService.js (signup function)
// Data destination: IndexedDB (users table)

// LOGIN FLOW:
// ──────────
// 1. User fills login form (Login.jsx)
// 2. Calls authService.login(email, password)
// 3. login() function:
//    - Ensures IndexedDB is initialized
//    - Retrieves user from IndexedDB by email
//    - Compares password
//    - If match, STORES session in localStorage
// 4. Returns { uid, email }
// 5. Redirects to registration page

// Code location: src/services/authService.js (login function)
// Data source: IndexedDB (users table)
// Session storage: localStorage

// REGISTRATION FLOW:
// ──────────────────
// 1. User fills registration form (RegistrationPage.jsx)
// 2. Calls authService.registerCandidate(uid, name, dob)
// 3. registerCandidate() function:
//    - Creates registration object
//    - STORES in IndexedDB (registrations table)
//    - Updates user record with registrationId
//    - STORES updated user in IndexedDB
//    - Updates current user in localStorage
// 4. Returns { registrationId }
// 5. Redirects to services page

// Code location: src/services/authService.js (registerCandidate function)
// Data destination: IndexedDB (registrations table + users table update)

// =====================================================================
// 4. FILE-BY-FILE DATA STORAGE LOCATIONS
// =====================================================================

// src/services/indexedDB.js
// ├─ initDB() → Initializes IndexedDB connection
// ├─ putUser(user) → Stores user in IndexedDB
// ├─ getUser(email) → Retrieves user by email from IndexedDB
// ├─ getUserByUid(uid) → Retrieves user by uid from IndexedDB
// ├─ putRegistration(reg) → Stores registration in IndexedDB
// ├─ getRegistration(regId) → Retrieves registration from IndexedDB
// └─ clearAll() → Clears all data from IndexedDB

// src/services/authService.js
// ├─ signup(email, password)
// │  ├─ Validates input
// │  ├─ Checks IndexedDB for existing user
// │  ├─ Creates new user object
// │  ├─ STORES in IndexedDB (indexedDB.putUser)
// │  └─ STORES session in localStorage (prepx_current_user)
// │
// ├─ login(email, password)
// │  ├─ Validates input
// │  ├─ Retrieves user from IndexedDB (indexedDB.getUser)
// │  ├─ Verifies password
// │  └─ STORES session in localStorage (prepx_current_user)
// │
// ├─ logout()
// │  └─ REMOVES session from localStorage
// │
// └─ registerCandidate(uid, name, dob)
//    ├─ Creates registration object
//    ├─ STORES in IndexedDB (indexedDB.putRegistration)
//    ├─ Updates user in IndexedDB (indexedDB.putUser)
//    └─ Updates session in localStorage

// src/auth/AuthProvider.jsx
// ├─ Reads current user from localStorage on app load
// ├─ Provides user state to entire app
// └─ Handles logout (clears localStorage)

// src/pages/Signup.jsx
// └─ Calls authService.signup() → Data goes to IndexedDB

// src/pages/Login.jsx
// └─ Calls authService.login() → Data read from IndexedDB

// src/pages/RegistrationPage.jsx
// └─ Calls authService.registerCandidate() → Data goes to IndexedDB

// =====================================================================
// 5. DATA FLOW DIAGRAM
// =====================================================================

/*
                         USER FORMS
                             |
              ┌──────────────┼──────────────┐
              ↓              ↓              ↓
          Signup.jsx    Login.jsx    RegistrationPage.jsx
              |              |              |
              └──────────────┼──────────────┘
                             ↓
                      authService.js
                             |
              ┌──────────────┼──────────────┐
              ↓              ↓              ↓
         signup()       login()      registerCandidate()
              |              |              |
              └──────────────┼──────────────┘
                             ↓
              ┌──────────────┴──────────────┐
              ↓                             ↓
          IndexedDB               localStorage
       (Persistent DB)          (Session Storage)
              |                       |
        ┌─────┴─────┐           [current user]
        ↓           ↓
      users    registrations
*/

// =====================================================================
// 6. HOW TO VIEW THE DATA
// =====================================================================

// BROWSER DEV TOOLS:
// 1. Open DevTools (F12 or Cmd+Option+I)
// 2. Go to "Application" or "Storage" tab
// 3. Expand "IndexedDB" → "prepx_db"
// 4. View tables: "users" and "registrations"
// 5. Expand "Local Storage"
// 6. Click on your app URL
// 7. View "prepx_current_user" key

// CONSOLE COMMANDS (run in browser console):
// ─────────────────────────────────────────

// View IndexedDB data:
// import { db } from './src/services/indexedDB.js'
// db.getUser('test@example.com').then(user => console.log(user))

// View localStorage:
// console.log(localStorage.getItem('prepx_current_user'))

// View all users:
// import { db } from './src/services/indexedDB.js'
// const request = indexedDB.open('prepx_db')
// // (more complex - use DevTools instead)

// =====================================================================
// 7. DATA PERSISTENCE
// =====================================================================

// Where data stays:
// ✅ IndexedDB → SURVIVES browser restart, refresh, app reload
// ✅ localStorage → SURVIVES browser restart, refresh, app reload
// ❌ In-memory state → LOST on page refresh (but restored from IndexedDB)

// When data is cleared:
// - logout() → Clears localStorage (but IndexedDB data remains)
// - Browser clear cache → Clears both IndexedDB and localStorage
// - IndexedDB.clearAll() → Manually clears IndexedDB

// =====================================================================
// 8. SUMMARY
// =====================================================================

/*
DATA STORAGE SUMMARY:
────────────────────

User Accounts:
  Storage: IndexedDB (prepx_db → users table)
  Key: email
  Fields: uid, email, password, registrationId, createdAt
  Accessed by: signup(), login(), registerCandidate()

Registration Records:
  Storage: IndexedDB (prepx_db → registrations table)
  Key: registrationId
  Fields: registrationId, uid, name, dob, createdAt
  Accessed by: registerCandidate(), getRegistration()

Current Session:
  Storage: localStorage
  Key: prepx_current_user
  Fields: uid, email, registrationId
  Accessed by: AuthProvider, useAuth()

All code paths lead to: src/services/indexedDB.js
All authentication logic in: src/services/authService.js
All UI forms call authService functions which write to IndexedDB
*/
