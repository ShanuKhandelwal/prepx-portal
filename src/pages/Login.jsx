
import { useState } from "react";
import * as authService from "../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const nav = useNavigate();
  const { login } = useAuth();

  const onLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      nav("/register");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: 450,
          width: "100%",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          padding: "40px",
        }}
      >
        {/* Header */}
        <h2
          style={{
            fontSize: "28px",
            color: "#333",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          Sign In
        </h2>
        <p
          style={{
            color: "#666",
            fontSize: "14px",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Enter your credentials to access your account
        </p>

        {/* Error Message */}
        {error && (
          <div
            style={{
              padding: 12,
              marginBottom: 20,
              backgroundColor: "#f8d7da",
              border: "1px solid #f5c6cb",
              borderRadius: 4,
              color: "#721c24",
              fontSize: "0.9rem",
            }}
          >
            ❌ {error}
          </div>
        )}

        <form onSubmit={onLogin}>
          {/* Email Field */}
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                display: "block",
                marginBottom: 8,
                fontWeight: 600,
                color: "#333",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              disabled={loading}
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: 25 }}>
            <label
              style={{
                display: "block",
                marginBottom: 8,
                fontWeight: 600,
                color: "#333",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: loading ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              marginBottom: 20,
            }}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Create Account Link */}
        <div style={{ textAlign: "center", marginBottom: 15 }}>
          <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Create Account
            </Link>
          </p>
        </div>

        {/* Back to Welcome */}
        <div style={{ textAlign: "center" }}>
          <Link
            to="/"
            style={{
              color: "#888",
              textDecoration: "none",
              fontSize: "13px",
            }}
          >
            ← Back to Welcome
          </Link>
        </div>


      </div>
    </div>
  );
}