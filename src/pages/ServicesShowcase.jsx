import { useState } from "react";
import { Link } from "react-router-dom";

export default function ServicesShowcase() {
  const [selectedType, setSelectedType] = useState("individual");

  const services = [
    {
      id: 1,
      icon: "📝",
      title: "Resume Building Guide",
      description: "Learn to craft a winning resume",
      details:
        "Create a professional resume that highlights your skills and experience. Learn formatting tips, key sections, and how to optimize for ATS systems.",
      color: "#ff6b6b",
      price: "$29",
    },
    {
      id: 2,
      icon: "💬",
      title: "Interview Basics Workshop",
      description: "Ace your first interview",
      details:
        "Master common interview questions, body language, and techniques to make a great first impression with your potential employers.",
      color: "#4ecdc4",
      price: "$39",
    },
    {
      id: 3,
      icon: "🔄",
      title: "LinkedIn & Personal Branding",
      description: "Build your professional presence",
      details:
        "Optimize your LinkedIn profile, create a personal brand, and network effectively to attract recruiters and potential employers.",
      color: "#45b7d1",
      price: "$24",
    },
    {
      id: 4,
      icon: "📊",
      title: "Career Roadmap",
      description: "Plan your tech journey",
      details:
        "Understand different career paths in tech, set realistic goals, and create a strategic plan to achieve your career objectives.",
      color: "#ffa502",
      price: "$34",
    },
    {
      id: 5,
      icon: "🎯",
      title: "Job Search Strategy",
      description: "Find your first opportunity",
      details:
        "Learn effective job search strategies, where to find opportunities, how to network, and tips for landing interviews.",
      color: "#9b59b6",
      price: "$29",
    },
  ];

  const totalIndividualPrice = 155;
  const packagePrice = 99;
  const savings = totalIndividualPrice - packagePrice;

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
          ← Back Home
        </Link>
      </nav>

      {/* Header Section */}
      <div
        style={{
          padding: "50px 40px",
          textAlign: "center",
          backgroundColor: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
          backgroundImage:
            "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          Our Services 🎯
        </h1>
        <p
          style={{
            fontSize: "18px",
            opacity: 0.95,
          }}
        >
          Choose individual courses or get everything in one complete package
        </p>
      </div>

      {/* Toggle Section */}
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
          borderBottom: "1px solid #e9ecef",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "25px",
          }}
        >
          How would you like to learn?
        </h2>
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
              backgroundColor:
                selectedType === "individual" ? "#007bff" : "white",
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
              backgroundColor:
                selectedType === "package" ? "#28a745" : "white",
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
          {/* Individual Services View */}
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
                Choose Your Courses
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "30px",
                  marginBottom: "40px",
                }}
              >
                {services.map((service) => (
                  <div
                    key={service.id}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "12px",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                      overflow: "hidden",
                      transition: "all 0.3s",
                      border: "2px solid transparent",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 32px rgba(0, 0, 0, 0.15)";
                      e.currentTarget.style.borderColor = service.color;
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
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "48px",
                          marginBottom: "20px",
                        }}
                      >
                        {service.icon}
                      </div>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "#333",
                          marginBottom: "10px",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          lineHeight: "1.6",
                          marginBottom: "15px",
                          flex: 1,
                        }}
                      >
                        {service.description}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#888",
                          marginBottom: "20px",
                          lineHeight: "1.5",
                        }}
                      >
                        {service.details}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "auto",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: service.color,
                          }}
                        >
                          {service.price}
                        </span>
                        <button
                          style={{
                            padding: "10px 20px",
                            backgroundColor: service.color,
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
                            e.target.style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.opacity = "1";
                            e.target.style.transform = "scale(1)";
                          }}
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Price Card */}
              <div
                style={{
                  backgroundColor: "#f0f8ff",
                  borderRadius: "12px",
                  padding: "30px",
                  textAlign: "center",
                  border: "2px solid #007bff",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "10px",
                  }}
                >
                  Individual Courses Total
                </h3>
                <p
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#007bff",
                  }}
                >
                  ${totalIndividualPrice}
                </p>
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
                  marginBottom: "40px",
                  textAlign: "center",
                }}
              >
                Complete Learning Package 🎁
              </h2>

              {/* Main Package Card */}
              <div
                style={{
                  maxWidth: "900px",
                  margin: "0 auto 50px",
                  backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  backgroundImage:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "16px",
                  padding: "50px 40px",
                  color: "white",
                  boxShadow: "0 10px 40px rgba(102, 126, 234, 0.4)",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    marginBottom: "15px",
                  }}
                >
                  Everything You Need
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    opacity: 0.95,
                    marginBottom: "30px",
                  }}
                >
                  All 5 courses + exclusive bonuses
                </p>

                {/* Price Section */}
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    borderRadius: "12px",
                    padding: "25px",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                      marginBottom: "15px",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          opacity: 0.8,
                          marginBottom: "5px",
                        }}
                      >
                        Regular Price
                      </p>
                      <p
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          textDecoration: "line-through",
                          opacity: 0.8,
                        }}
                      >
                        ${totalIndividualPrice}
                      </p>
                    </div>
                    <div
                      style={{
                        fontSize: "28px",
                        opacity: 0.6,
                      }}
                    >
                      →
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          opacity: 0.8,
                          marginBottom: "5px",
                        }}
                      >
                        Package Price
                      </p>
                      <p
                        style={{
                          fontSize: "36px",
                          fontWeight: "bold",
                        }}
                      >
                        ${packagePrice}
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#4ade80",
                    }}
                  >
                    Save ${savings} (36% OFF)
                  </p>
                </div>

                {/* Services Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(150px, 1fr))",
                    gap: "15px",
                    marginBottom: "30px",
                  }}
                >
                  {services.map((service) => (
                    <div
                      key={service.id}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        borderRadius: "10px",
                        padding: "15px",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "32px",
                          marginBottom: "8px",
                        }}
                      >
                        {service.icon}
                      </div>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          lineHeight: "1.4",
                        }}
                      >
                        {service.title}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Benefits Section */}
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    borderRadius: "12px",
                    padding: "25px",
                    marginBottom: "30px",
                    textAlign: "left",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginBottom: "15px",
                      textAlign: "center",
                    }}
                  >
                    Additional Benefits
                  </h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(180px, 1fr))",
                      gap: "12px",
                    }}
                  >
                    <div>✅ Lifetime Access</div>
                    <div>✅ Expert Mentorship</div>
                    <div>✅ Mock Interviews</div>
                    <div>✅ Job Placement Support</div>
                    <div>✅ Certificate Included</div>
                    <div>✅ Community Access</div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  style={{
                    width: "100%",
                    padding: "18px 32px",
                    backgroundColor: "white",
                    color: "#667eea",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.02)";
                    e.target.style.boxShadow =
                      "0 8px 24px rgba(0, 0, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  Get Complete Package
                </button>
              </div>

              {/* Comparison Table */}
              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div
                  style={{
                    padding: "30px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#333",
                      marginBottom: "25px",
                      textAlign: "center",
                    }}
                  >
                    Why Choose Package?
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                      gap: "25px",
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#667eea",
                          marginBottom: "10px",
                        }}
                      >
                        💰 Save More
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          lineHeight: "1.6",
                        }}
                      >
                        Get 36% discount when you buy the complete package instead of individual courses.
                      </p>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#667eea",
                          marginBottom: "10px",
                        }}
                      >
                        📚 Complete Solution
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          lineHeight: "1.6",
                        }}
                      >
                        Everything needed to land your first tech job in one package.
                      </p>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#667eea",
                          marginBottom: "10px",
                        }}
                      >
                        🎯 Structured Path
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          lineHeight: "1.6",
                        }}
                      >
                        Follow a proven roadmap from resume to job offer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
