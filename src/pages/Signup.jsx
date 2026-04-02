
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const onSignup = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Email & password required");
    if (password.length < 6) return alert("Password must be at least 6 characters");

    try {
      setLoading(true);
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      // Create profile doc (frontend-only)
      await setDoc(doc(db, "users", cred.user.uid), {
        email,
        createdAt: serverTimestamp(),
        registrationId: null, // will be set after candidate registers
      });

      nav("/register");
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 420 }}>
      <h2>Create Account</h2>
      <form onSubmit={onSignup}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <input
          placeholder="Password (min 6 chars)"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <button disabled={loading} style={{ padding: 10, width: "100%" }}>
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>

      <p style={{ marginTop: 10 }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
