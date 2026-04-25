import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

export default function SignIn() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);

  const handleSignIn = () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (email && password.length >= 6) {
      const userData = {
        id: Date.now(),
        email,
        name: email.split("@")[0],
      };

      login(userData);

      // Handle redirect
      if (redirect) {
        // Properly navigate to the redirect path
        navigate(`/${redirect}`);
      } else {
        navigate("/fresher");
      }
    } else {
      setError("Invalid email or password");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Navigation with Back Button */}
      <nav
        style={{
          padding: "20px 40px",
          backgroundColor: "white",
          borderBottom: "1px solid #e9ecef",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#007bff",
            textDecoration: "none",
          }}
        >
          Evalo
        </Link>
        <button
          onClick={handleBack}
          style={{
            padding: "8px 16px",
            backgroundColor: "#f8f9fa",
            color: "#007bff",
            border: "1px solid #007bff",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>
      </nav>

      {/* Authentication Form */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 80px)",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "450px",
            backgroundColor: "white",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              borderBottom: "2px solid #e9ecef",
            }}
          >
            <button
              style={{
                flex: 1,
                padding: "16px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
            <Link
              to={`/create-account${redirect ? `?redirect=${redirect}` : ""}`}
              state={{ fromSignIn: true }}
              style={{
                flex: 1,
                padding: "16px",
                backgroundColor: "#f8f9fa",
                color: "#666",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "600",
                textAlign: "center",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#e9ecef";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#f8f9fa";
              }}
            >
              Create Account
            </Link>
          </div>

          {/* Form Content */}
          <div style={{ padding: "40px" }}>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              Sign In
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "#666",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              Sign in to your Evalo account
            </p>

            {error && (
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "#f8d7da",
                  color: "#721c24",
                  borderRadius: "6px",
                  marginBottom: "20px",
                  fontSize: "14px",
                }}
              >
                {error}
              </div>
            )}

            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "14px", fontWeight: "600", color: "#333" }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px",
                  marginTop: "5px",
                  boxSizing: "border-box",
                }}
                placeholder="Enter your email"
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <label style={{ fontSize: "14px", fontWeight: "600", color: "#333" }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px",
                  marginTop: "5px",
                  boxSizing: "border-box",
                }}
                placeholder="Enter your password"
              />
            </div>

            <button
              onClick={handleSignIn}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#0056b3";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#007bff";
              }}
            >
              Sign In
            </button>

            <p style={{ textAlign: "center", fontSize: "14px", color: "#666", marginTop: "15px" }}>
              Don't have an account?{" "}
              <Link
                to={`/create-account${redirect ? `?redirect=${redirect}` : ""}`}
                state={{ fromSignIn: true }}
                style={{
                  color: "#007bff",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
