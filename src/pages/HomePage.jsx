import { Link } from "react-router-dom";

export default function HomePage() {
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
        <div
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#007bff",
          }}
        >
          Evalo
        </div>
      </nav>

      {/* Hero Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 40px",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Left Content */}
        <div
          style={{
            flex: 1,
            paddingRight: "40px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Welcome to Evalo!! 🚀
          </h1>
          <h2
            style={{
              fontSize: "36px",
              color: "#007bff",
              fontWeight: "600",
              marginBottom: "30px",
              lineHeight: "1.4",
            }}
          >
            Evaluate Skills, Elevate Careers
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}
          >
            Master your interview skills with personalized practice, expert
            feedback, and comprehensive preparation tools. Start your journey to
            career success today.
          </p>
        </div>
      </div>

      {/* Candidate Type Selection Section */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "60px 40px",
          borderTop: "1px solid #e9ecef",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Are you from IT or Non-IT Background?
          </h3>
          <p
            style={{
              fontSize: "16px",
              color: "#666",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Select your background to get personalized interview preparation
          </p>

          {/* Cards Container */}
          <div
            style={{
              display: "flex",
              gap: "30px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {/* IT Background Card */}
            <Link
              to="/candidate-type/it"
              style={{
                flex: "1 1 300px",
                maxWidth: "350px",
                padding: "40px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0, 123, 255, 0.1)",
                textDecoration: "none",
                border: "2px solid transparent",
                transition: "all 0.3s",
                cursor: "pointer",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#007bff";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0, 123, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(0, 123, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "20px",
                }}
              >
                💻
              </div>
              <h4
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#007bff",
                  marginBottom: "15px",
                }}
              >
                IT Background
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                Computer Science, Engineering, IT professionals, Developers,
                and tech enthusiasts
              </p>
              <div
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  backgroundColor: "#007bff",
                  color: "white",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Get Started
              </div>
            </Link>

            {/* Non-IT Background Card */}
            <Link
              to="/candidate-type/non-it"
              style={{
                flex: "1 1 300px",
                maxWidth: "350px",
                padding: "40px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0, 123, 255, 0.1)",
                textDecoration: "none",
                border: "2px solid transparent",
                transition: "all 0.3s",
                cursor: "pointer",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#28a745";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(40, 167, 69, 0.2)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(0, 123, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "20px",
                }}
              >
                📊
              </div>
              <h4
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#28a745",
                  marginBottom: "15px",
                }}
              >
                Non-IT Background
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                Business, Commerce, Science, Arts, and career switchers
                preparing for IT roles
              </p>
              <div
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  backgroundColor: "#28a745",
                  color: "white",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Get Started
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
