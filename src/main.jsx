
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { db } from "./services/indexedDB";
import { seedTestUser } from "./services/seedData";
import { runAuthTests } from "./services/testSuite";

// Initialize IndexedDB on app startup
db.initDB()
  .then(() => {
    console.log("✅ IndexedDB initialized");
    // Seed test user for development
    return seedTestUser();
  })
  .then((testCreds) => {
    if (testCreds) {
      console.log("📝 Test credentials ready:");
      console.log("   Email:", testCreds.email);
      console.log("   Password:", testCreds.password);
    }
    // Run full test suite
    console.log("\n🧪 Running automated test suite...\n");
    return runAuthTests();
  })
  .then((testResults) => {
    if (testResults.success) {
      console.log("✨ Ready for testing! Use the credentials above to login.");
      console.log("💡 Run window.runAuthTests() in console anytime to re-run tests.");
    }
  })
  .catch((err) => console.error("❌ Initialization error:", err));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
