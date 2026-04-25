# How to View User Account Data

This guide shows you how to see all the user accounts that have been created in your app.

---

## Method 1: Browser DevTools (Easiest) 🖥️

### Step 1: Open Developer Tools
- **Mac**: Press `Cmd + Option + I`
- **Windows/Linux**: Press `F12`
- Or right-click anywhere on the page → "Inspect"

### Step 2: Go to Storage/Application Tab
- Look for the **"Application"** or **"Storage"** tab at the top of DevTools
- (If you see "Console", "Sources", etc., you're in the wrong tab)

### Step 3: Find IndexedDB
In the left sidebar:
```
Storage
├── Local Storage
├── Session Storage
├── IndexedDB  ← CLICK HERE
├── Cookies
└── ...
```

### Step 4: Open Evalo_db
Click on **IndexedDB** to expand it, then click on **"Evalo_db"**:
```
IndexedDB
└── Evalo_db  ← CLICK HERE
    ├── users  ← TABLE WITH USER ACCOUNTS
    └── registrations  ← TABLE WITH REGISTRATION DATA
```

### Step 5: View User Accounts
Click on **"users"** to see all user accounts:
```
Evalo_db
└── users
    ├── test@example.com  (email)
    ├── john@gmail.com    (email)
    └── sarah@outlook.com (email)
```

### Step 6: See User Details
Click on any user email (like `test@example.com`) to see their data:

```json
{
  "email": "test@example.com",
  "uid": "user_1712345678_abc123",
  "password": "password123",
  "registrationId": "reg_1712345678_xyz789",
  "createdAt": "2024-04-05T10:30:45.123Z"
}
```

---

## Method 2: Browser Console (For Developers) 💻

Open the browser console (**Cmd + Option + I**, then click "Console" tab)

### View Specific User
```javascript
// Get user by email
import { db } from './src/services/indexedDB.js'
const user = await db.getUser('test@example.com');
console.log(user);
```

### View All Users (Advanced)
```javascript
// Get all users in IndexedDB
async function getAllUsers() {
  const request = indexedDB.open('Evalo_db');
  
  return new Promise((resolve) => {
    request.onsuccess = () => {
      const database = request.result;
      const transaction = database.transaction(['users'], 'readonly');
      const store = transaction.objectStore('users');
      const getAllRequest = store.getAll();
      
      getAllRequest.onsuccess = () => {
        console.table(getAllRequest.result);
        resolve(getAllRequest.result);
      };
    };
  });
}

// Run it
getAllUsers();
```

### View Currently Logged In User
```javascript
// See the current user from localStorage
const currentUser = JSON.parse(localStorage.getItem('Evalo_current_user'));
console.log('Current User:', currentUser);
```

---

## Method 3: Check Test Data 🧪

When the app starts, it automatically:
1. Creates IndexedDB database
2. Creates a test user automatically
3. Runs automated tests

### Test User Account (Auto-Created)
```
Email:    test@example.com
Password: password123
UID:      (auto-generated)
```

### View Test Results
Open browser console and look for test output:
```
✅ Test 1: Database initialized successfully
✅ Test 2: Signup successful
✅ Test 3: Login successful
✅ Test 4: Get current user successful
...
```

---

## Data Structure Breakdown 🏗️

### User Account Object
When a user signs up, this data is stored in the `users` table:

```javascript
{
  email: "user@example.com",           // Primary key (unique)
  uid: "user_1712345678_abc123",       // Generated ID (indexed)
  password: "their_password_here",     // Plain text (demo only)
  registrationId: "reg_1712345678",    // Links to registration
  createdAt: "2024-04-05T10:30:45Z"   // Timestamp
}
```

### Registration Object
After signup, user fills registration form, stored in `registrations` table:

```javascript
{
  registrationId: "reg_1712345678_xyz789",  // Primary key
  uid: "user_1712345678_abc123",            // Links to user
  name: "John Doe",                         // Full name
  dob: "1995-05-15",                        // Date of birth
  createdAt: "2024-04-05T10:35:20Z"        // Timestamp
}
```

---

## Quick Reference: Find Data in DevTools 🔍

| What to View | Where to Go |
|---|---|
| **All user accounts** | DevTools → Application → IndexedDB → Evalo_db → users |
| **User details** | Click on user email in users table |
| **All registrations** | DevTools → Application → IndexedDB → Evalo_db → registrations |
| **Current logged-in user** | DevTools → Application → Local Storage → Evalo_current_user |
| **Test results** | Open browser Console (F12) → look at logged messages |

---

## Example: Step-by-Step to View Test User

1. **Open your app**: Go to `http://localhost:5173/`
2. **Open DevTools**: Press `Cmd + Option + I` (Mac) or `F12` (Windows)
3. **Go to Application tab**: Click "Application" at the top
4. **Click IndexedDB**: In left sidebar, expand "IndexedDB"
5. **Click Evalo_db**: Click the database name
6. **Click users**: See all user accounts
7. **Click test@example.com**: See the test user details

You should see:
```
email: "test@example.com"
uid: "user_..."
password: "password123"
registrationId: "reg_..."
createdAt: "..."
```

---

## Troubleshooting 🐛

### Q: I don't see any users?
**A**: The test user is auto-created. Try:
1. Close the app and refresh page (`Cmd+R` / `F5`)
2. Open DevTools → Console to see if tests passed
3. Check if there are any errors

### Q: I see an empty users table?
**A**: This means no users have signed up yet. Try:
1. Go to Welcome page
2. Click "Create Account"
3. Sign up with any email
4. Refresh DevTools
5. You should now see the new user

### Q: How do I clear all users?
**A**: Run this in browser console:
```javascript
import { db } from './src/services/indexedDB.js'
db.clearAll();
console.log('All data cleared!');
```

### Q: The password shows in plain text - is this secure?
**A**: No, this is demo/development only! For production:
- Use bcrypt or similar to hash passwords
- Never store plain text passwords
- Current setup is fine for development/testing

---

## Summary 📋

**To see user account data:**
1. Open DevTools (`Cmd + Option + I`)
2. Click "Application" tab
3. Click IndexedDB → Evalo_db → users
4. See all user accounts with their details

**The data is stored in:**
- **IndexedDB** (`Evalo_db` database) - Permanent storage
- **localStorage** (`Evalo_current_user`) - Session storage
- **Both survive** browser restart
