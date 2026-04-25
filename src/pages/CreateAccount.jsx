import { Link, useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

export default function CreateAccount() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const userData = {
      id: Date.now(),
      email,
      name,
    };

    login(userData);

    if (redirect) {
      navigate(`/${redirect}`);
    } else {
      navigate("/fresher");
    }
  };

  const handleBack = () => {
    if (location.state?.fromSignIn) {
      navigate(-2);
    } else {
      navigate(-1);
    }
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
            <Link
              to={`/sign-in${redirect ? `?redirect=${redirect}` : ""}`}
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
                e.style.backgroundColor = "#e9ecef";
              }}
              onMouseLeave={(e) => {
                e.style.backgroundColor = "#f8f9fa";
              }}
            >
              Sign In
            </Link>
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
              Create Account
            </button>
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
              Create Account
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "#666",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              Join Evalo to start learning
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
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
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
                placeholder="Enter your full name"
              />
            </div>

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

            <div style={{ marginBottom: "20px" }}>
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

            <div style={{ marginBottom: "30px" }}>
              <label style={{ fontSize: "14px", fontWeight: "600", color: "#333" }}>
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
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
                placeholder="Confirm your password"
              />
            </div>

            <button
              onClick={handleSignUp}
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
              Create Account
            </button>

            <p style={{ textAlign: "center", fontSize: "14px", color: "#666", marginTop: "15px" }}>
              Already have an account?{" "}
              <Link
                to={`/sign-in${redirect ? `?redirect=${redirect}` : ""}`}
                style={{
                  color: "#007bff",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
