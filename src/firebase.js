
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Firebase client config (ok to keep in frontend)
const firebaseConfig = {
  apiKey: "AIzaSyAPOtoQV2zyQdOQY5RZlntRqJSTpmv3f9I",
  authDomain: "candidate-registration-portal.firebaseapp.com",
  projectId: "candidate-registration-portal",
  storageBucket: "candidate-registration-portal.firebasestorage.app",
  messagingSenderId: "661657700116",
  appId: "1:661657700116:web:34818edef07cb6ab3de401",
  measurementId: "G-6CLXZM3X3E", // optional
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
