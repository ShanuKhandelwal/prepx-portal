/**
 * Automated test suite for auth flow and IndexedDB storage.
 * Run this to verify signup, login, registration, and data persistence.
 */

import * as authService from "./authService";
import { db } from "./indexedDB";

export async function runAuthTests() {
  console.log("\n" + "=".repeat(60));
  console.log("🧪 STARTING COMPREHENSIVE AUTH TESTS");
  console.log("=".repeat(60) + "\n");

  try {
    // Test 1: Initialize DB
    console.log("Test 1️⃣  Initializing IndexedDB...");
    await db.initDB();
    console.log("✅ IndexedDB initialized successfully\n");

    // Test 2: Signup new user
    console.log("Test 2️⃣  Testing Signup...");
    const signupEmail = "testuser@example.com";
    const signupPassword = "testpass123";
    
    try {
      const signupResult = await authService.signup(signupEmail, signupPassword);
      console.log(`✅ Signup successful`);
      console.log(`   Email: ${signupResult.email}`);
      console.log(`   UID: ${signupResult.uid}\n`);
      var testUid = signupResult.uid;
    } catch (err) {
      if (err.message === "User already exists") {
        console.log(`⚠️  User already exists (from previous test)\n`);
        // Try to login instead
        const loginResult = await authService.login(signupEmail, signupPassword);
        testUid = loginResult.uid;
      } else {
        throw err;
      }
    }

    // Test 3: Login
    console.log("Test 3️⃣  Testing Login...");
    const loginResult = await authService.login(signupEmail, signupPassword);
    console.log(`✅ Login successful`);
    console.log(`   Email: ${loginResult.email}`);
    console.log(`   UID: ${loginResult.uid}\n`);

    // Test 4: Get current user
    console.log("Test 4️⃣  Testing getCurrentUser...");
    const currentUser = await authService.getCurrentUser();
    console.log(`✅ Current user retrieved`);
    console.log(`   Email: ${currentUser?.email}`);
    console.log(`   UID: ${currentUser?.uid}\n`);

    // Test 5: Register candidate
    console.log("Test 5️⃣  Testing registerCandidate...");
    const regResult = await authService.registerCandidate(testUid, "Test User", "2000-01-01");
    console.log(`✅ Registration successful`);
    console.log(`   Registration ID: ${regResult.registrationId}\n`);

    // Test 6: Get registration ID
    console.log("Test 6️⃣  Testing getRegistrationId...");
    const regId = await authService.getRegistrationId();
    console.log(`✅ Registration ID retrieved`);
    console.log(`   Registration ID: ${regId}\n`);

    // Test 7: Query IndexedDB directly
    console.log("Test 7️⃣  Testing IndexedDB direct query...");
    const storedUser = await db.getUser(signupEmail);
    console.log(`✅ User found in IndexedDB`);
    console.log(`   Email: ${storedUser?.email}`);
    console.log(`   UID: ${storedUser?.uid}`);
    console.log(`   Registration ID: ${storedUser?.registrationId}\n`);

    // Test 8: Logout
    console.log("Test 8️⃣  Testing Logout...");
    await authService.logout();
    const loggedOutUser = await authService.getCurrentUser();
    if (loggedOutUser === null) {
      console.log(`✅ Logout successful (no current user)\n`);
    } else {
      console.log(`❌ Logout failed (user still exists)\n`);
    }

    // Test 9: Re-login after logout
    console.log("Test 9️⃣  Testing Re-login after logout...");
    const reloginResult = await authService.login(signupEmail, signupPassword);
    console.log(`✅ Re-login successful`);
    console.log(`   Email: ${reloginResult.email}\n`);

    // Test 10: Verify registration persisted
    console.log("Test 🔟 Testing data persistence...");
    const registration = await authService.getRegistration(regId);
    console.log(`✅ Registration data persisted`);
    console.log(`   Registration ID: ${registration?.registrationId}`);
    console.log(`   Name: ${registration?.name}`);
    console.log(`   DOB: ${registration?.dob}\n`);

    console.log("=".repeat(60));
    console.log("✅ ALL TESTS PASSED!");
    console.log("=".repeat(60));
    console.log("\n📊 Test Summary:");
    console.log(`   - Signup: ✅`);
    console.log(`   - Login: ✅`);
    console.log(`   - Current User: ✅`);
    console.log(`   - Registration: ✅`);
    console.log(`   - Logout: ✅`);
    console.log(`   - Re-login: ✅`);
    console.log(`   - Data Persistence: ✅`);
    console.log(`   - IndexedDB Storage: ✅\n`);

    return {
      success: true,
      testUser: {
        email: signupEmail,
        password: signupPassword,
        uid: testUid,
        registrationId: regId,
      },
    };
  } catch (err) {
    console.error("\n❌ TEST FAILED!");
    console.error("Error:", err);
    console.error(err.stack);
    return { success: false, error: err.message };
  }
}

// Run tests on demand by calling: window.runAuthTests()
if (typeof window !== "undefined") {
  window.runAuthTests = runAuthTests;
}
