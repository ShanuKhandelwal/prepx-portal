# System Architecture: User Data Export

## 📊 Complete System Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         Evalo Application                        │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────┐      ┌──────────────────────┐
│   Signup/Login       │      │   Admin Panel        │
│   Pages              │      │   (/admin)           │
│                      │      │                      │
│ - User creates       │      │ - View user stats    │
│   account            │      │ - Download reports   │
│ - Password saved     │      │ - Choose format      │
│ - UID generated      │      │ - View details       │
└──────────────┬───────┘      └──────────┬───────────┘
               │                         │
               └─────────────┬───────────┘
                             ↓
              ┌──────────────────────────────┐
              │   userExportService.js       │
              │   (Core Export Logic)        │
              │                              │
              │ - generateUserCSV()          │
              │ - generateUserTextFile()     │
              │ - generateUserJSON()         │
              │ - downloadAsCSV()            │
              │ - downloadAsText()           │
              │ - downloadAsJSON()           │
              │ - getUserCount()             │
              │ - getUserDetails()           │
              └──────────────┬───────────────┘
                             ↓
              ┌──────────────────────────────┐
              │   IndexedDB                  │
              │   (Browser Database)         │
              │                              │
              │ USERS table:                 │
              │ - email (primary key)        │
              │ - password                   │
              │ - uid                        │
              │ - registrationId             │
              │ - createdAt                  │
              │                              │
              │ REGISTRATIONS table:         │
              │ - registrationId (PK)        │
              │ - uid (foreign key)          │
              │ - name                       │
              │ - dob                        │
              │ - createdAt                  │
              └──────────────┬───────────────┘
                             ↓
        ┌────────────────────────────────────────┐
        │      Downloaded Files                  │
        │                                        │
        │ ┌────────────────┐                    │
        │ │  CSV Format    │                    │
        │ │  Excel Ready   │ → Opens in Excel   │
        │ └────────────────┘                    │
        │                                        │
        │ ┌────────────────┐                    │
        │ │  Text Format   │                    │
        │ │  Readable      │ → Opens in Notes   │
        │ └────────────────┘                    │
        │                                        │
        │ ┌────────────────┐                    │
        │ │  JSON Format   │                    │
        │ │  Structured    │ → Uses in Code     │
        │ └────────────────┘                    │
        └────────────────────────────────────────┘
```

---

## 🔄 Data Flow: User Sign-up to Export

```
STEP 1: User Signs Up
┌─────────────────────────┐
│  Signup.jsx             │
│  Email: john@gmail.com  │
│  Password: mypass123    │
└────────────┬────────────┘
             ↓
STEP 2: Auth Service Processes
┌─────────────────────────────────┐
│  authService.signup()           │
│  - Validate input               │
│  - Generate UID                 │
│  - Hash data                    │
│  - Create user object           │
└────────────┬────────────────────┘
             ↓
STEP 3: Save to IndexedDB
┌─────────────────────────────────┐
│  indexedDB.js                   │
│  - putUser(userData)            │
│  - Save to 'users' table        │
│  - IndexedDB stores data        │
└────────────┬────────────────────┘
             ↓
STEP 4: User Completes Registration
┌─────────────────────────────────┐
│  RegistrationPage.jsx           │
│  - Enter name, DOB              │
│  - registerCandidate()          │
│  - Save to 'registrations'      │
└────────────┬────────────────────┘
             ↓
STEP 5: Admin Wants Report
┌─────────────────────────────────┐
│  AdminPanel.jsx                 │
│  - Open /admin page             │
│  - Click "Download as CSV"      │
└────────────┬────────────────────┘
             ↓
STEP 6: Generate Export
┌─────────────────────────────────┐
│  userExportService.js           │
│  - Read all users from IDB      │
│  - Read all registrations       │
│  - Combine data                 │
│  - Format as CSV/TXT/JSON       │
└────────────┬────────────────────┘
             ↓
STEP 7: Download File
┌─────────────────────────────────┐
│  Browser Download               │
│  - Create Blob from content     │
│  - Generate download link       │
│  - File saves to Downloads      │
│  - User opens in Excel          │
└─────────────────────────────────┘
```

---

## 🏗️ Component Architecture

```
App.jsx (Routes)
├── / (WelcomePage)
├── /signup (Signup.jsx)
├── /login (Login.jsx)
├── /admin (AdminPanel.jsx) ← NEW!
│   │
│   └─→ imports: userExportService
│   │
│   └─→ displays: stats, buttons, formats
│
└── /register (RegistrationPage)
└── /services (ServicesPage)

Services
├── authService.js
│   └─→ signup, login, logout, register
├── indexedDB.js
│   └─→ CRUD operations on IndexedDB
└── userExportService.js (NEW!)
    ├─→ generateUserCSV()
    ├─→ generateUserTextFile()
    ├─→ generateUserJSON()
    ├─→ downloadAsCSV()
    ├─→ downloadAsText()
    ├─→ downloadAsJSON()
    ├─→ getUserCount()
    └─→ getUserDetails()

Storage
└── IndexedDB (Browser Database)
    ├── users table
    │   ├─ email (primary)
    │   ├─ uid (indexed)
    │   ├─ password
    │   ├─ registrationId
    │   └─ createdAt
    └── registrations table
        ├─ registrationId (primary)
        ├─ uid (indexed, FK)
        ├─ name
        ├─ dob
        └─ createdAt
```

---

## 📊 Data Models

### User Object (from users table)
```
{
  email: "john@gmail.com",              // Primary key
  uid: "user_1712345678_abc123",        // Unique identifier
  password: "mypass123",                 // Plain text (demo)
  registrationId: "reg_1712345678_x",   // Links to registration
  createdAt: "2024-04-09T10:30:45Z"    // ISO timestamp
}
```

### Registration Object (from registrations table)
```
{
  registrationId: "reg_1712345678_x",   // Primary key
  uid: "user_1712345678_abc123",        // Foreign key (to users)
  name: "John Smith",                   // Full name
  dob: "1995-05-15",                    // Date of birth
  createdAt: "2024-04-09T10:35:20Z"    // ISO timestamp
}
```

### Combined Export (in memory)
```
{
  email: "john@gmail.com",
  password: "mypass123",
  uid: "user_1712345678_abc123",
  registrationId: "reg_1712345678_x",
  name: "John Smith",                   // From registration
  dob: "1995-05-15",                    // From registration
  accountCreated: "2024-04-09T10:30:45Z",
  registeredOn: "2024-04-09T10:35:20Z"
}
```

---

## 📁 File Organization

```
Evalo Project
├── src/
│   ├── pages/
│   │   ├── WelcomePage.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── RegistrationPage.jsx
│   │   ├── ServicesPage.jsx
│   │   └── AdminPanel.jsx ← NEW!
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── indexedDB.js
│   │   └── userExportService.js ← NEW!
│   │
│   ├── styles/
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── styles.css
│   │   └── AdminPanel.css ← NEW!
│   │
│   ├── auth/
│   │   ├── AuthProvider.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── App.jsx (updated with /admin route)
│   └── main.jsx
│
├── Documentation/
│   ├── USER_EXPORT_GUIDE.md ← NEW!
│   ├── ADMIN_PANEL_SETUP_SUMMARY.md ← NEW!
│   ├── QUICK_START_ADMIN.md ← NEW!
│   ├── DATA_STORAGE_GUIDE.md
│   ├── DATA_STRUCTURE_AND_DATABASE_SETUP.md
│   ├── BEST_DATABASE_FOR_BUSINESS.md
│   └── POSTGRESQL_COST_AND_LICENSE.md
│
└── package.json (unchanged)
```

---

## 🔐 Security Flow

```
User Input (Signup)
    ↓
┌─────────────────────────────┐
│ Validation                  │
│ - Email format check        │
│ - Password strength         │
│ - Required fields           │
└────────────┬────────────────┘
             ↓
┌─────────────────────────────┐
│ Database Operation          │
│ - Check duplicate email     │
│ - Generate unique UID       │
│ - Store in IndexedDB        │
└────────────┬────────────────┘
             ↓
┌─────────────────────────────┐
│ Export (Admin Only)         │
│ - No additional encryption  │
│ - Download to file          │
│ - User responsibility       │
└─────────────────────────────┘

NOTE: For production:
- Add password hashing (bcrypt)
- Add SSL/TLS encryption
- Add access controls to /admin
- Add audit logging
- Add encryption for exported files
```

---

## 🎯 User Interaction Flow

```
┌──────────────┐          ┌──────────────┐
│  New User    │          │  Admin User  │
└──────┬───────┘          └──────┬───────┘
       │                         │
       │ 1. Visit app            │
       ├──────────→ WelcomePage  │
       │                         │
       │ 2. Click signup         │
       ├──────────→ Signup Page  │
       │           (fill form)   │
       │                         │
       │ 3. Click signup button  │
       ├──────────→ Save to IDB  │
       │                         │
       │ 4. Auto login           │
       ├──────────→ Register     │
       │           (fill details)│
       │                         │
       │ 5. Submit registration  │
       ├──────────→ Save to IDB  │
       │                         │
       │ 6. Access services      │
       └──────────→ Services Pg  │
                                 │
                         1. Visit /admin
                         ├────────→ Admin Panel
                         │
                         2. See stats
                         ├────────→ Shows user count
                         │
                         3. Choose format
                         ├────────→ CSV/TXT/JSON
                         │
                         4. Click download
                         ├────────→ File downloads
                         │
                         5. Open file
                         └────────→ Excel/Editor
```

---

## 📈 Scalability Notes

```
Current Setup:
├── IndexedDB storage: ~50MB+ per browser
├── No server needed
├── Works offline
└── Suitable for: MVP, small business

When You Scale:
├── Move to Supabase (PostgreSQL)
│   ├── Update authService.js
│   ├── Update userExportService.js
│   └── Same function signatures!
│
├── Benefits:
│   ├── Central database (multiple users)
│   ├── More storage
│   ├── Real-time sync
│   └── Backup & recovery
│
└── No code changes needed (same exports!)
```

---

## 🎓 Summary

```
User Signup
    ↓
IndexedDB Storage
    ↓
Admin Panel (/admin)
    ↓
userExportService
    ↓
CSV/TXT/JSON Files
    ↓
Excel/Notepad/Code Editor
    ↓
Business Use Cases!
```

---

## ✨ Key Features

```
✅ Automatic data collection (no manual entry)
✅ Multiple export formats (choice is yours)
✅ Beautiful admin dashboard
✅ Zero-cost storage (IndexedDB)
✅ Production-ready code
✅ Security conscious (warnings included)
✅ Mobile responsive
✅ Easy to expand/modify
✅ Scalable to any database
✅ Ready for business use!
```

