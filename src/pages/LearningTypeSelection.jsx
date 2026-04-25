import { useLocation, useNavigate, Link } from "react-router-dom";

export default function LearningTypeSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCourses = location.state?.selectedCourses || [];

  const handleIndividual = () => {
    navigate("/fresher-courses", { state: { selectedCourses, learningType: "individual" } });
  };

  const handlePackage = () => {
    navigate("/package", { state: { selectedCourses, learningType: "package", type: "fresher" } });
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", display: "flex", flexDirection: "column" }}>
      {/* Navigation Bar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", backgroundColor: "#f8f9fa", borderBottom: "1px solid #e9ecef" }}>
        <Link to="/" style={{ fontSize: "28px", fontWeight: "bold", color: "#007bff", textDecoration: "none", cursor: "pointer" }}>
          Evalo
        </Link>
        <button
          onClick={() => navigate(-1)}
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
        </button>
      </nav>

      {/* Header Section */}
      <div style={{ padding: "40px", textAlign: "center", backgroundColor: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)", backgroundImage: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)", color: "white" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "10px" }}>How Would You Like to Learn? 📚</h1>
        <p style={{ fontSize: "16px", opacity: 0.95 }}>Choose between individual courses or complete package</p>
      </div>

      {/* Selected Courses Summary */}
      {selectedCourses.length > 0 && (
        <div style={{ padding: "30px 40px", backgroundColor: "#f0f8ff", borderBottom: "1px solid #d1e7f5" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#007bff", marginBottom: "15px" }}>
              Your Selected Courses ({selectedCourses.length}):
            </h3>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {selectedCourses.map((course, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "8px 14px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Learning Type Options */}
      <div style={{ flex: 1, padding: "80px 40px", backgroundColor: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Individual Courses Card */}
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
                e.currentTarget.style.borderColor = "#007bff";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 123, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "64px", marginBottom: "20px" }}>📌</div>
              <h3 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "15px" }}>
                Individual Courses
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", marginBottom: "30px" }}>
                Choose and purchase courses individually based on your specific learning needs and interests.
              </p>

              <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "12px", marginBottom: "30px" }}>
                <p style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>Best For:</p>
                <ul style={{ fontSize: "13px", color: "#555", textAlign: "left", margin: 0, paddingLeft: "20px" }}>
                  <li>Targeted learning on specific topics</li>
                  <li>Budget-conscious learners</li>
                  <li>Flexible course selection</li>
                </ul>
              </div>

              <button
                onClick={handleIndividual}
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
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
                Choose Individual Courses
              </button>
            </div>

            {/* Complete Package Card */}
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
                e.currentTarget.style.borderColor = "#28a745";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(40, 167, 69, 0.15)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Popular Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "20px",
                  backgroundColor: "#28a745",
                  color: "white",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                POPULAR
              </div>

              <div style={{ fontSize: "64px", marginBottom: "20px" }}>🎁</div>
              <h3 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "15px" }}>
                Complete Package
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", marginBottom: "30px" }}>
                Get all 5 essential courses together at a special discounted price with exclusive benefits.
              </p>

              <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "12px", marginBottom: "30px" }}>
                <p style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>Best For:</p>
                <ul style={{ fontSize: "13px", color: "#555", textAlign: "left", margin: 0, paddingLeft: "20px" }}>
                  <li>Comprehensive learning journey</li>
                  <li>Maximize savings (up to 40% off)</li>
                  <li>Complete career preparation</li>
                </ul>
              </div>

              <div style={{ backgroundColor: "#f0f8ff", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
                <p style={{ fontSize: "12px", color: "#28a745", fontWeight: "600" }}>
                  Save up to 40% compared to buying individually
                </p>
              </div>

              <button
                onClick={handlePackage}
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
                  e.target.style.backgroundColor = "#1f8e3c";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#28a745";
                }}
              >
                Get Complete Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
