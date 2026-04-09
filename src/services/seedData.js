/**
 * Test data seeder for development.
 * Creates a test user in IndexedDB for easy testing.
 */

import * as authService from "./authService";

export async function seedTestUser() {
  try {
    const testEmail = "test@example.com";
    const testPassword = "password123";

    console.log("🌱 Seeding test user...");

    // Try to signup (will fail if user exists, which is fine)
    try {
      const result = await authService.signup(testEmail, testPassword);
      console.log("✅ Test user created:", testEmail);
      console.log("   Password:", testPassword);
      return { email: testEmail, password: testPassword };
    } catch (err) {
      if (err.message === "User already exists") {
        console.log("✅ Test user already exists:", testEmail);
        console.log("   Password:", testPassword);
        return { email: testEmail, password: testPassword };
      } else {
        throw err;
      }
    }
  } catch (err) {
    console.error("❌ Error seeding test user:", err);
    throw err;
  }
}
