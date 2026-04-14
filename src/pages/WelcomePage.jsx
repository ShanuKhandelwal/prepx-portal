import { Link } from "react-router-dom";

export default function WelcomePage() {
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
          maxWidth: 500,
          width: "100%",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          padding: "40px",
          textAlign: "center",
        }}
      >
        {/* Logo/Branding */}
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

        {/* Welcome Message */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "28px", color: "#333", marginBottom: 10 }}>
            Welcome to Evalo
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#666",
              lineHeight: "1.6",
              marginBottom: 20,
            }}
          >
            Have we met before? Please create an account to continue using Evalo.
          </p>
        </div>

        {/* Primary CTA - Create Account */}
        <Link
          to="/signup"
          style={{
            display: "block",
            width: "100%",
            padding: "14px 20px",
            backgroundColor: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: 30,
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "#0056b3")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "#007bff")
          }
        >
          Create an Account
        </Link>

        {/* Secondary CTA - Sign In */}
        <div
          style={{
            padding: "14px 20px",
            borderRadius: "6px",
            border: "2px solid #007bff",
            backgroundColor: "white",
          }}
        >
          <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
            Already have an account?
          </p>
          <Link
            to="/login"
            style={{
              display: "inline-block",
              marginTop: 8,
              color: "#007bff",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.target.style.textDecoration = "underline")
            }
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            Sign In
          </Link>
        </div>

        {/* Footer Info */}
        <div
          style={{
            marginTop: 40,
            paddingTop: 20,
            borderTop: "1px solid #eee",
            fontSize: "12px",
            color: "#999",
          }}
        >
        </div>
      </div>
    </div>
  );
}
