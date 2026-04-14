import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!email || !password) {
        setError("Please fill in all fields");
        return;
      }

      // Call your login function
      await login(email, password);
      navigate("/register");
    } catch (err) {
      setError(err.message || "Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: 30 }}>
          <div
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#007bff",
              marginBottom: 10,
            }}
          >
            Evalo
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "#888",
              fontStyle: "italic",
              marginBottom: 20,
            }}
          >
            Interview Preparation Portal
          </div>
          <div style={{ borderBottom: "2px solid #007bff", marginBottom: 20 }} />
        </div>

        {/* Title */}
        <h2 style={{ fontSize: "24px", color: "#333", marginBottom: 30 }}>
          Welcome Back
        </h2>

        {/* Error Message */}
        {error && (
          <div
            style={{
              backgroundColor: "#f8d7da",
              color: "#721c24",
              padding: "12px",
              borderRadius: "6px",
              marginBottom: 20,
              fontSize: "14px",
            }}
          >
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignIn}>
          {/* Email Input */}
          <div style={{ marginBottom: 20, textAlign: "left" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "600",
                color: "#333",
                marginBottom: 8,
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "14px",
                boxSizing: "border-box",
                fontFamily: "inherit",
              }}
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: 30, textAlign: "left" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "600",
                color: "#333",
                marginBottom: 8,
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "14px",
                boxSizing: "border-box",
                fontFamily: "inherit",
              }}
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              display: "block",
              width: "100%",
              padding: "14px 20px",
              backgroundColor: loading ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: 20,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = "#007bff")}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div style={{ margin: "20px 0", color: "#999" }}>or</div>

        {/* Sign Up Link */}
        <div
          style={{
            padding: "14px 20px",
            borderRadius: "6px",
            border: "2px solid #007bff",
            backgroundColor: "white",
          }}
        >
          <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
            Don't have an account?
          </p>
          <Link
            to="/create-account"
            style={{
              display: "inline-block",
              marginTop: 8,
              color: "#007bff",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
