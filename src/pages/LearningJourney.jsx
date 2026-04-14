import { useState } from "react";
import { Link } from "react-router-dom";

export default function LearningJourney() {
  const [selectedType, setSelectedType] = useState(null);

  const learningItems = [
    {
      id: 1,
      icon: "📝",
      title: "Resume Building Guide",
      description: "Learn to craft a winning resume that stands out",
      color: "#ff6b6b",
    },
    {
      id: 2,
      icon: "💬",
      title: "Interview Basics Workshop",
      description: "Ace your first interview with confidence",
      color: "#4ecdc4",
    },
    {
      id: 3,
      icon: "🔄",
      title: "LinkedIn & Personal Branding",
      description: "Build your professional presence online",
      color: "#45b7d1",
    },
    {
      id: 4,
      icon: "📊",
      title: "Career Roadmap",
      description: "Plan your tech journey step by step",
      color: "#ffa502",
    },
    {
      id: 5,
      icon: "🎯",
      title: "Job Search Strategy",
      description: "Find your first opportunity effectively",
      color: "#9b59b6",
    },
  ];

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
            cursor: "pointer",
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

      {/* Header Section */}
      <div
        style={{
          padding: "50px 40px",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
          borderBottom: "1px solid #e9ecef",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "15px",
          }}
        >
          Your Learning Journey 🚀
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Choose what you want to work on first
        </p>

        {/* Selection Type Buttons */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setSelectedType("individual")}
            style={{
              padding: "14px 40px",
              backgroundColor: selectedType === "individual" ? "#007bff" : "white",
              color: selectedType === "individual" ? "white" : "#007bff",
              border: "2px solid #007bff",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              if (selectedType !== "individual") {
                e.target.style.backgroundColor = "#e8f4ff";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedType !== "individual") {
                e.target.style.backgroundColor = "white";
              }
            }}
          >
            📌 Individual Courses
          </button>
          <button
            onClick={() => setSelectedType("package")}
            style={{
              padding: "14px 40px",
              backgroundColor: selectedType === "package" ? "#28a745" : "white",
              color: selectedType === "package" ? "white" : "#28a745",
              border: "2px solid #28a745",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              if (selectedType !== "package") {
                e.target.style.backgroundColor = "#e8f5e9";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedType !== "package") {
                e.target.style.backgroundColor = "white";
              }
            }}
          >
            🎁 Complete Package
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div
        style={{
          flex: 1,
          padding: "60px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Individual Courses View */}
          {selectedType === "individual" && (
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "40px",
                  textAlign: "center",
                }}
              >
                Choose Individual Courses
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                  gap: "30px",
                }}
              >
                {learningItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "12px",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                      overflow: "hidden",
                      transition: "all 0.3s",
                      cursor: "pointer",
                      border: "2px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(0, 0, 0, 0.15)";
                      e.currentTarget.style.borderColor = item.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(0, 0, 0, 0.1)";
                      e.currentTarget.style.borderColor = "transparent";
                    }}
                  >
                    <div
                      style={{
                        padding: "30px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "48px",
                          marginBottom: "20px",
                        }}
                      >
                        {item.icon}
                      </div>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "#333",
                          marginBottom: "12px",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          lineHeight: "1.6",
                          marginBottom: "20px",
                        }}
                      >
                        {item.description}
                      </p>
                      <button
                        style={{
                          width: "100%",
                          padding: "12px 20px",
                          backgroundColor: item.color,
                          color: "white",
                          border: "none",
                          borderRadius: "6px",
                          fontSize: "14px",
                          fontWeight: "600",
                          cursor: "pointer",
                          transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.opacity = "0.9";
                          e.target.style.transform = "scale(1.02)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.opacity = "1";
                          e.target.style.transform = "scale(1)";
                        }}
                      >
                        Explore →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Complete Package View */}
          {selectedType === "package" && (
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                Complete Learning Package 🎁
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#666",
                  textAlign: "center",
                  marginBottom: "50px",
                }}
              >
                Get everything you need to land your dream job
              </p>

              <div
                style={{
                  maxWidth: "900px",
                  margin: "0 auto",
                  backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  backgroundImage:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "16px",
                  padding: "50px 40px",
                  color: "white",
                  boxShadow: "0 10px 40px rgba(102, 126, 234, 0.4)",
                  marginBottom: "40px",
                }}
              >
                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    marginBottom: "30px",
                    textAlign: "center",
                  }}
                >
                  Everything Included in One Package
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "25px",
                    marginBottom: "40px",
                  }}
                >
                  {learningItems.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        borderRadius: "12px",
                        padding: "20px",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "36px",
                          marginBottom: "12px",
                        }}
                      >
                        {item.icon}
                      </div>
                      <h4
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginBottom: "8px",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "12px",
                          opacity: 0.9,
                          lineHeight: "1.5",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    borderRadius: "12px",
                    padding: "30px",
                    marginBottom: "30px",
                    textAlign: "center",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "15px",
                    }}
                  >
                    Additional Benefits
                  </h4>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "12px",
                      textAlign: "left",
                    }}
                  >
                    <li style={{ fontSize: "14px" }}>✅ Lifetime Access</li>
                    <li style={{ fontSize: "14px" }}>✅ Expert Mentorship</li>
                    <li style={{ fontSize: "14px" }}>✅ Mock Interviews</li>
                    <li style={{ fontSize: "14px" }}>✅ Job Placement Support</li>
                    <li style={{ fontSize: "14px" }}>✅ Certificate Included</li>
                    <li style={{ fontSize: "14px" }}>✅ Community Access</li>
                  </ul>
                </div>

                <button
                  style={{
                    width: "100%",
                    padding: "16px 32px",
                    backgroundColor: "white",
                    color: "#667eea",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.02)";
                    e.target.style.boxShadow =
                      "0 8px 24px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  Enroll in Complete Package
                </button>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!selectedType && (
            <div
              style={{
                textAlign: "center",
                padding: "60px 20px",
              }}
            >
              <div
                style={{
                  fontSize: "80px",
                  marginBottom: "20px",
                }}
              >
                👇
              </div>
              <p
                style={{
                  fontSize: "18px",
                  color: "#666",
                }}
              >
                Select Individual Courses or Complete Package to get started
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
