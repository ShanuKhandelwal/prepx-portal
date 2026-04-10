# Complete Data Structure & Zero-Cost Database Integration Guide

This file documents ALL data in your PrepX project and provides code to connect with various zero-cost databases.

---

## 📊 Part 1: Complete Data Structure

### 1.1 USERS TABLE
Stores user account information

```json
{
  "email": "user@example.com",
  "uid": "user_1712345678_abc123",
  "password": "password123",
  "registrationId": "reg_1712345678_xyz789",
  "createdAt": "2024-04-05T10:30:45.123Z"
}
```

**Field Details:**
| Field | Type | Description | Example |
|-------|------|-------------|---------|
| email | String | User's email (Primary Key) | test@example.com |
| uid | String | Unique user ID (auto-generated) | user_1712345678_abc123 |
| password | String | User's password (plain text in demo) | password123 |
| registrationId | String | Links to registration record | reg_1712345678_xyz789 |
| createdAt | ISO 8601 | Account creation timestamp | 2024-04-05T10:30:45.123Z |

**SQL Create Table:**
```sql
CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  uid VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  registrationId VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_uid ON users(uid);
CREATE INDEX idx_users_registrationId ON users(registrationId);
```

---

### 1.2 REGISTRATIONS TABLE
Stores user registration/profile information

```json
{
  "registrationId": "reg_1712345678_xyz789",
  "uid": "user_1712345678_abc123",
  "name": "John Doe",
  "dob": "1995-05-15",
  "createdAt": "2024-04-05T10:35:20.456Z"
}
```

**Field Details:**
| Field | Type | Description | Example |
|-------|------|-------------|---------|
| registrationId | String | Registration ID (Primary Key, auto-generated) | reg_1712345678_xyz789 |
| uid | String | Links to user account | user_1712345678_abc123 |
| name | String | User's full name | John Doe |
| dob | Date | Date of birth (YYYY-MM-DD) | 1995-05-15 |
| createdAt | ISO 8601 | Registration timestamp | 2024-04-05T10:35:20.456Z |

**SQL Create Table:**
```sql
CREATE TABLE registrations (
  registrationId VARCHAR(255) PRIMARY KEY,
  uid VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  dob DATE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (uid) REFERENCES users(uid)
);

CREATE INDEX idx_registrations_uid ON registrations(uid);
```

---

### 1.3 DATA RELATIONSHIPS

```
┌─────────────────────────────────────────────┐
│                  USERS                      │
├─────────────────────────────────────────────┤
│ email (PK)                                  │
│ uid (UNIQUE)                                │
│ password                                    │
│ registrationId (FK to registrations)       │
│ createdAt                                   │
└────────────────────┬────────────────────────┘
                     │
                     │ 1:1
                     │
┌────────────────────▼────────────────────────┐
│              REGISTRATIONS                  │
├─────────────────────────────────────────────┤
│ registrationId (PK)                         │
│ uid (FK to users)                           │
│ name                                        │
│ dob                                         │
│ createdAt                                   │
└─────────────────────────────────────────────┘
```

---

## 🗄️ Part 2: Zero-Cost Database Options

### Option A: Firebase Firestore (Zero-Cost Tier)
**Cost**: Free tier includes 1GB storage, 50K reads/day, 20K writes/day

#### A1. Firestore Integration Code

```javascript
// src/services/firestoreDB.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs, setDoc, doc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Create/Update User
export async function createUser(email, uid, password, registrationId) {
  try {
    await setDoc(doc(db, "users", email), {
      email,
      uid,
      password,
      registrationId,
      createdAt: new Date().toISOString()
    });
    console.log("User created in Firestore:", email);
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

// Get User by Email
export async function getUser(email) {
  try {
    const userRef = doc(db, "users", email);
    const docSnap = await getDoc(userRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
}

// Get User by UID
export async function getUserByUid(uid) {
  try {
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty ? null : querySnapshot.docs[0].data();
  } catch (error) {
    console.error("Error getting user by UID:", error);
    throw error;
  }
}

// Create Registration
export async function createRegistration(registrationId, uid, name, dob) {
  try {
    await setDoc(doc(db, "registrations", registrationId), {
      registrationId,
      uid,
      name,
      dob,
      createdAt: new Date().toISOString()
    });
    console.log("Registration created in Firestore:", registrationId);
  } catch (error) {
    console.error("Error creating registration:", error);
    throw error;
  }
}

// Get Registration by ID
export async function getRegistration(registrationId) {
  try {
    const regRef = doc(db, "registrations", registrationId);
    const docSnap = await getDoc(regRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error("Error getting registration:", error);
    throw error;
  }
}

// Get All Registrations for User
export async function getRegistrationsByUid(uid) {
  try {
    const q = query(collection(db, "registrations"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error("Error getting registrations:", error);
    throw error;
  }
}

// Delete User
export async function deleteUser(email) {
  try {
    await deleteDoc(doc(db, "users", email));
    console.log("User deleted:", email);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

export const firestoreDB = {
  createUser,
  getUser,
  getUserByUid,
  createRegistration,
  getRegistration,
  getRegistrationsByUid,
  deleteUser
};
```

---

### Option B: Supabase (PostgreSQL, Zero-Cost Tier)
**Cost**: Free tier includes unlimited API requests, 500MB storage, 2GB bandwidth

#### B1. Supabase Setup

```bash
# Install Supabase client
npm install @supabase/supabase-js
```

#### B2. Supabase Integration Code

```javascript
// src/services/supabaseDB.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://your-project.supabase.co";
const SUPABASE_KEY = "your-anon-key";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Create/Update User
export async function createUser(email, uid, password, registrationId) {
  try {
    const { data, error } = await supabase
      .from('users')
      .upsert({
        email,
        uid,
        password,
        registrationId,
        createdAt: new Date().toISOString()
      }, { onConflict: 'email' });

    if (error) throw error;
    console.log("User created in Supabase:", email);
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

// Get User by Email
export async function getUser(email) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows
    return data || null;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
}

// Get User by UID
export async function getUserByUid(uid) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('uid', uid)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data || null;
  } catch (error) {
    console.error("Error getting user by UID:", error);
    throw error;
  }
}

// Create Registration
export async function createRegistration(registrationId, uid, name, dob) {
  try {
    const { data, error } = await supabase
      .from('registrations')
      .insert({
        registrationId,
        uid,
        name,
        dob,
        createdAt: new Date().toISOString()
      });

    if (error) throw error;
    console.log("Registration created in Supabase:", registrationId);
    return data;
  } catch (error) {
    console.error("Error creating registration:", error);
    throw error;
  }
}

// Get Registration by ID
export async function getRegistration(registrationId) {
  try {
    const { data, error } = await supabase
      .from('registrations')
      .select('*')
      .eq('registrationId', registrationId)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data || null;
  } catch (error) {
    console.error("Error getting registration:", error);
    throw error;
  }
}

// Get All Registrations for User
export async function getRegistrationsByUid(uid) {
  try {
    const { data, error } = await supabase
      .from('registrations')
      .select('*')
      .eq('uid', uid);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error getting registrations:", error);
    throw error;
  }
}

// Delete User
export async function deleteUser(email) {
  try {
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('email', email);

    if (error) throw error;
    console.log("User deleted:", email);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

export const supabaseDB = {
  createUser,
  getUser,
  getUserByUid,
  createRegistration,
  getRegistration,
  getRegistrationsByUid,
  deleteUser
};
```

---

### Option C: MongoDB with MongoDB Atlas (Zero-Cost Tier)
**Cost**: Free tier includes 512MB storage, unlimited API requests

#### C1. MongoDB Integration Code

```javascript
// src/services/mongoDBService.js
import axios from 'axios';

const MONGODB_API_KEY = "your-api-key";
const MONGODB_APP_ID = "your-app-id";
const API_URL = `https://data.mongodb-api.com/app/${MONGODB_APP_ID}/graphql`;

// Generic function to execute MongoDB queries
async function executeQuery(query, variables = {}) {
  try {
    const response = await axios.post(
      API_URL,
      { query, variables },
      {
        headers: {
          'Authorization': `Bearer ${MONGODB_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("MongoDB API error:", error);
    throw error;
  }
}

// Create User
export async function createUser(email, uid, password, registrationId) {
  const mutation = `
    mutation CreateUser($email: String!, $uid: String!, $password: String!, $registrationId: String) {
      insertOneUser(data: {
        email: $email,
        uid: $uid,
        password: $password,
        registrationId: $registrationId,
        createdAt: "${new Date().toISOString()}"
      }) {
        _id
      }
    }
  `;
  
  try {
    const result = await executeQuery(mutation, { email, uid, password, registrationId });
    console.log("User created in MongoDB:", email);
    return result.data.insertOneUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

// Get User by Email
export async function getUser(email) {
  const query = `
    query GetUser($email: String!) {
      user(query: { email: $email }) {
        _id
        email
        uid
        password
        registrationId
        createdAt
      }
    }
  `;
  
  try {
    const result = await executeQuery(query, { email });
    return result.data.user;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
}

// Get User by UID
export async function getUserByUid(uid) {
  const query = `
    query GetUserByUid($uid: String!) {
      user(query: { uid: $uid }) {
        _id
        email
        uid
        password
        registrationId
        createdAt
      }
    }
  `;
  
  try {
    const result = await executeQuery(query, { uid });
    return result.data.user;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
}

// Create Registration
export async function createRegistration(registrationId, uid, name, dob) {
  const mutation = `
    mutation CreateReg($registrationId: String!, $uid: String!, $name: String!, $dob: String) {
      insertOneRegistration(data: {
        registrationId: $registrationId,
        uid: $uid,
        name: $name,
        dob: $dob,
        createdAt: "${new Date().toISOString()}"
      }) {
        _id
      }
    }
  `;
  
  try {
    const result = await executeQuery(mutation, { registrationId, uid, name, dob });
    console.log("Registration created in MongoDB:", registrationId);
    return result.data.insertOneRegistration;
  } catch (error) {
    console.error("Error creating registration:", error);
    throw error;
  }
}

// Get Registration by ID
export async function getRegistration(registrationId) {
  const query = `
    query GetReg($registrationId: String!) {
      registration(query: { registrationId: $registrationId }) {
        _id
        registrationId
        uid
        name
        dob
        createdAt
      }
    }
  `;
  
  try {
    const result = await executeQuery(query, { registrationId });
    return result.data.registration;
  } catch (error) {
    console.error("Error getting registration:", error);
    throw error;
  }
}

// Get All Registrations for User
export async function getRegistrationsByUid(uid) {
  const query = `
    query GetRegsByUid($uid: String!) {
      registrations(query: { uid: $uid }) {
        _id
        registrationId
        uid
        name
        dob
        createdAt
      }
    }
  `;
  
  try {
    const result = await executeQuery(query, { uid });
    return result.data.registrations || [];
  } catch (error) {
    console.error("Error getting registrations:", error);
    throw error;
  }
}

// Delete User
export async function deleteUser(email) {
  const mutation = `
    mutation DeleteUser($email: String!) {
      deleteOneUser(query: { email: $email }) {
        deletedCount
      }
    }
  `;
  
  try {
    await executeQuery(mutation, { email });
    console.log("User deleted:", email);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

export const mongoDBService = {
  createUser,
  getUser,
  getUserByUid,
  createRegistration,
  getRegistration,
  getRegistrationsByUid,
  deleteUser
};
```

---

### Option D: Firebase Realtime Database (Zero-Cost Tier)
**Cost**: Free tier includes 1GB storage, concurrent connections

#### D1. Firebase Realtime DB Integration Code

```javascript
// src/services/firebaseRealtimeDB.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child, remove, query, orderByChild, equalTo } from 'firebase/database';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  databaseURL: "https://your-project.firebaseio.com",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Create/Update User
export async function createUser(email, uid, password, registrationId) {
  try {
    const emailKey = email.replace(/[.#$[\]]/g, '_');
    await set(ref(db, `users/${emailKey}`), {
      email,
      uid,
      password,
      registrationId,
      createdAt: new Date().toISOString()
    });
    console.log("User created in Firebase Realtime DB:", email);
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

// Get User by Email
export async function getUser(email) {
  try {
    const emailKey = email.replace(/[.#$[\]]/g, '_');
    const snapshot = await get(child(ref(db), `users/${emailKey}`));
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
}

// Get User by UID (requires iteration)
export async function getUserByUid(uid) {
  try {
    const snapshot = await get(ref(db, 'users'));
    if (!snapshot.exists()) return null;
    
    const users = snapshot.val();
    const foundUser = Object.values(users).find(user => user.uid === uid);
    return foundUser || null;
  } catch (error) {
    console.error("Error getting user by UID:", error);
    throw error;
  }
}

// Create Registration
export async function createRegistration(registrationId, uid, name, dob) {
  try {
    await set(ref(db, `registrations/${registrationId}`), {
      registrationId,
      uid,
      name,
      dob,
      createdAt: new Date().toISOString()
    });
    console.log("Registration created in Firebase Realtime DB:", registrationId);
  } catch (error) {
    console.error("Error creating registration:", error);
    throw error;
  }
}

// Get Registration by ID
export async function getRegistration(registrationId) {
  try {
    const snapshot = await get(child(ref(db), `registrations/${registrationId}`));
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.error("Error getting registration:", error);
    throw error;
  }
}

// Get All Registrations for User
export async function getRegistrationsByUid(uid) {
  try {
    const snapshot = await get(ref(db, 'registrations'));
    if (!snapshot.exists()) return [];
    
    const registrations = snapshot.val();
    const userRegs = Object.values(registrations).filter(reg => reg.uid === uid);
    return userRegs;
  } catch (error) {
    console.error("Error getting registrations:", error);
    throw error;
  }
}

// Delete User
export async function deleteUser(email) {
  try {
    const emailKey = email.replace(/[.#$[\]]/g, '_');
    await remove(ref(db, `users/${emailKey}`));
    console.log("User deleted:", email);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

export const firebaseRealtimeDB = {
  createUser,
  getUser,
  getUserByUid,
  createRegistration,
  getRegistration,
  getRegistrationsByUid,
  deleteUser
};
```

---

## 🔄 Part 3: How to Switch Databases

### Step 1: Choose Your Database
Options:
- **Firebase Firestore** - Easiest, Google-backed
- **Supabase** - PostgreSQL, SQL-friendly
- **MongoDB Atlas** - Document-based, flexible
- **Firebase Realtime DB** - Real-time syncing

### Step 2: Update Your Auth Service
Modify `src/services/authService.js`:

```javascript
// OPTION A: Using Firestore
// import { firestoreDB as db } from './firestoreDB.js';

// OPTION B: Using Supabase
// import { supabaseDB as db } from './supabaseDB.js';

// OPTION C: Using MongoDB
// import { mongoDBService as db } from './mongoDBService.js';

// OPTION D: Using Firebase Realtime DB
// import { firebaseRealtimeDB as db } from './firebaseRealtimeDB.js';

// Then use db.createUser(), db.getUser(), etc.
```

### Step 3: Example - Update Signup Function

```javascript
export async function signup(email, password) {
  try {
    // Check if user exists
    const existingUser = await db.getUser(email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Generate IDs
    const uid = generateUid();
    const registrationId = generateRegistrationId();

    // Create user in database
    await db.createUser(email, uid, password, registrationId);

    // Store in localStorage (session)
    localStorage.setItem('prepx_current_user', JSON.stringify({ uid, email, registrationId }));

    return { uid, email, registrationId };
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
}
```

---

## 📋 Part 4: Database Comparison

| Feature | Firebase Firestore | Supabase | MongoDB Atlas | Firebase Realtime DB |
|---------|-------------------|----------|---------------|--------------------|
| **Cost** | Free tier: 1GB | Free tier: 512MB | Free tier: 512MB | Free tier: 1GB |
| **Type** | NoSQL (Document) | SQL (PostgreSQL) | NoSQL (Document) | NoSQL (Real-time) |
| **Best For** | Quick start, mobile | SQL queries, traditional | Flexible schema | Real-time sync |
| **Authentication** | Built-in | Built-in | Custom required | Built-in |
| **Setup Time** | ~5 mins | ~10 mins | ~15 mins | ~5 mins |
| **Learning Curve** | Easy | Medium | Medium | Easy |
| **Scalability** | Excellent | Good | Excellent | Good |
| **Query Flexibility** | Limited | Full SQL | Very flexible | Limited |

**Recommendation**: Start with **Supabase** if you want SQL, or **Firebase Firestore** if you want simplicity.

---

## 🚀 Part 5: Migration Checklist

When switching from IndexedDB to any cloud database:

```
□ Choose database option
□ Create account and get credentials
□ Create tables/collections with schema
□ Install required packages (npm install)
□ Create database service file (firestoreDB.js, supabaseDB.js, etc.)
□ Update authService.js imports
□ Update signup(), login(), registerCandidate() functions
□ Test signup flow
□ Test login flow
□ Test registration flow
□ Clear all old data from IndexedDB
□ Deploy to production
□ Monitor usage on free tier
```

---

## 📝 Part 6: Complete Function Reference

All database services export these functions with identical signatures:

```javascript
// Create/Update User
createUser(email, uid, password, registrationId) → Promise

// Get User by Email
getUser(email) → Promise<User | null>

// Get User by UID
getUserByUid(uid) → Promise<User | null>

// Create Registration
createRegistration(registrationId, uid, name, dob) → Promise

// Get Registration by ID
getRegistration(registrationId) → Promise<Registration | null>

// Get All Registrations for User
getRegistrationsByUid(uid) → Promise<Registration[]>

// Delete User
deleteUser(email) → Promise
```

This means you can swap databases by just changing the import statement!

---

## 🔐 Part 7: Important Security Notes

### Current State (Development Only)
```javascript
❌ Passwords stored in PLAIN TEXT
❌ No encryption
❌ No rate limiting
❌ No input validation
```

### For Production, Add:
```javascript
✅ Password hashing (bcrypt)
✅ SSL/TLS encryption
✅ Rate limiting
✅ Input validation
✅ SQL injection prevention (use parameterized queries)
✅ CORS protection
✅ Authentication tokens (JWT)
✅ Email verification
✅ Password reset flow
```

---

## 📞 Setup Instructions for Each Database

### Firebase Firestore Setup
1. Go to https://firebase.google.com
2. Click "Go to console"
3. Create new project
4. Enable Firestore Database
5. Create collections: "users" and "registrations"
6. Get API key from Project Settings
7. Copy config to your code

### Supabase Setup
1. Go to https://supabase.com
2. Sign up with GitHub
3. Create new project
4. Go to SQL Editor
5. Run the SQL create table scripts above
6. Get API URL and Key from Settings
7. Install @supabase/supabase-js: `npm install @supabase/supabase-js`

### MongoDB Atlas Setup
1. Go to https://mongodb.com/cloud/atlas
2. Create account (free tier)
3. Create cluster
4. Enable Data API
5. Create database "prepx" with collections "users" and "registrations"
6. Get API key and App ID
7. Install axios: `npm install axios`

### Firebase Realtime Database Setup
1. Go to https://firebase.google.com
2. Create new project
3. Go to Realtime Database
4. Create database (test mode)
5. Get database URL from Settings
6. Copy config to your code

---

## ✅ Quick Start Checklist

```
For using with ZERO-COST DATABASE:

1. UNDERSTAND YOUR DATA:
   ✓ 2 tables: users and registrations
   ✓ users has: email, uid, password, registrationId, createdAt
   ✓ registrations has: registrationId, uid, name, dob, createdAt

2. CHOOSE A DATABASE:
   ✓ Firebase Firestore (easiest)
   ✓ Supabase (SQL-friendly)
   ✓ MongoDB Atlas (flexible)
   ✓ Firebase Realtime DB (real-time)

3. CREATE DATABASE:
   ✓ Set up account and credentials
   ✓ Create tables with schema

4. INTEGRATE CODE:
   ✓ Copy appropriate service file from this document
   ✓ Update authService.js imports
   ✓ Test signup, login, registration

5. DEPLOY:
   ✓ Push to production
   ✓ Monitor free tier usage
```

---

## 🎯 Summary

**This document provides:**
- ✅ Complete data structure (2 tables, 10 total fields)
- ✅ 4 zero-cost database integration options
- ✅ Copy-paste ready code for each database
- ✅ SQL schema definitions
- ✅ Migration checklist
- ✅ Security best practices
- ✅ Setup instructions

All code uses identical function signatures, so you can swap databases by changing one import line!

