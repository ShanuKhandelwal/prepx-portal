import { Link, useNavigate } from "react-router-dom";

export default function CandidateTypeNonIT() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          backgroundColor: "#f8f9fa",
          borderBottom: "1px solid #e9ecef",
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#007bff",
            textDecoration: "none",
          }}
        >
          Evalo
        </Link>
        <Link
          to="/"
          style={{
            padding: "8px 16px",
            backgroundColor: "#f8f9fa",
            color: "#007bff",
            textDecoration: "none",
            borderRadius: "6px",
            border: "1px solid #007bff",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          ← Back
        </Link>
      </nav>

      {/* Header */}
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor:
            "linear-gradient(135deg, #28a745 0%, #1e8449 100%)",
          backgroundImage:
            "linear-gradient(135deg, #28a745 0%, #1e8449 100%)",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "38px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Non-IT Background Interview Prep 📊
        </h1>
        <p
          style={{
            fontSize: "16px",
            opacity: 0.95,
          }}
        >
          Choose your experience level to get started
        </p>
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          padding: "80px 40px",
          backgroundColor: "#f8f9fa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Fresher Card */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "50px 40px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                textAlign: "center",
                border: "2px solid transparent",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#28a745";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(40, 167, 69, 0.15)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onClick={() => navigate("/non-it-fresher-interview-types")}
            >
              <div style={{ fontSize: "64px", marginBottom: "20px" }}>🎓</div>
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "15px",
                }}
              >
                Fresher
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "30px",
                }}
              >
                0-2 years experience. Build foundational skills and prepare for
                entry-level interviews.
              </p>
              <button
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#1e8449";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#28a745";
                }}
              >
                Explore Fresher Path →
              </button>
            </div>

            {/* Professional Card */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "50px 40px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                textAlign: "center",
                border: "2px solid transparent",
                transition: "all 0.3s",
                cursor: "pointer",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#667eea";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(102, 126, 234, 0.15)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onClick={() => navigate("/non-it-professional-interview-types")}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "20px",
                  backgroundColor: "#667eea",
                  color: "white",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                POPULAR
              </div>
              <div style={{ fontSize: "64px", marginBottom: "20px" }}>💼</div>
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "15px",
                }}
              >
                Professional
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "30px",
                }}
              >
                2+ years experience. Master advanced concepts and excel in
                senior-level interviews.
              </p>
              <button
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  backgroundColor: "#667eea",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5568d3";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#667eea";
                }}
              >
                Explore Professional Path →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
