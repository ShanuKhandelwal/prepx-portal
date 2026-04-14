import { useState } from "react";
import { Link } from "react-router-dom";

export default function NonITProfessionalCourses() {
  const [selectedType, setSelectedType] = useState("individual");

  const professionalServices = [
    {
      id: 1,
      icon: "🏗️",
      title: "Tech Industry Fundamentals",
      description: "Understand the tech industry from outside",
      details: "Master tech industry concepts, how tech companies work, market trends, and strategic thinking needed to understand and lead in tech roles as a non-IT professional.",
      color: "#e74c3c",
      price: "$54",
    },
    {
      id: 2,
      icon: "⚙️",
      title: "Business to Tech Transition",
      description: "Bridge your non-IT expertise to tech",
      details:
        "Learn how to leverage your business background, understand tech-business alignment, and transition your professional skills from non-IT to tech leadership roles effectively.",
      color: "#3498db",
      price: "$59",
    },
    {
      id: 3,
      icon: "🔐",
      title: "Tech Leadership & Management",
      description: "Lead tech teams as a non-IT professional",
      details:
        "Develop leadership competencies specific to non-IT professionals, team management strategies, and transition into tech leadership roles effectively.",
      color: "#9b59b6",
      price: "$54",
    },
    {
      id: 4,
      icon: "📈",
      title: "Executive Career Transition Strategy",
      description: "Strategic advancement in tech roles",
      details:
        "Strategic career planning for non-IT professionals, negotiation techniques, and advancement opportunities while transitioning into tech leadership positions.",
      color: "#f39c12",
      price: "$49",
    },
  ];

  const totalIndividualPrice = 216;
  const packagePrice = 129;
  const savings = totalIndividualPrice - packagePrice;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", display: "flex", flexDirection: "column" }}>
      {/* Navigation Bar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", backgroundColor: "#f8f9fa", borderBottom: "1px solid #e9ecef" }}>
        <Link to="/" style={{ fontSize: "28px", fontWeight: "bold", color: "#28a745", textDecoration: "none", cursor: "pointer" }}>
          Evalo
        </Link>
        <Link to="/candidate-type/non-it" style={{ padding: "8px 16px", backgroundColor: "#f8f9fa", color: "#28a745", textDecoration: "none", borderRadius: "6px", border: "1px solid #28a745", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
          ← Back
        </Link>
      </nav>

      {/* Header */}
      <div style={{ padding: "40px", textAlign: "center", backgroundColor: "linear-gradient(135deg, #28a745 0%, #1e7e34 100%)", backgroundImage: "linear-gradient(135deg, #28a745 0%, #1e7e34 100%)", color: "white" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "10px" }}>Non-IT Professional Learning Path 💼</h1>
        <p style={{ fontSize: "16px", opacity: 0.95 }}>Advanced courses for experienced non-IT professionals</p>
      </div>

      {/* Selection Buttons */}
      <div style={{ padding: "40px", textAlign: "center", backgroundColor: "#f8f9fa", borderBottom: "1px solid #e9ecef" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>How would you like to learn?</h2>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => setSelectedType("individual")}
            style={{
              padding: "12px 32px",
              backgroundColor: selectedType === "individual" ? "#28a745" : "white",
              color: selectedType === "individual" ? "white" : "#28a745",
              border: "2px solid #28a745",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              if (selectedType !== "individual") e.target.style.backgroundColor = "#e8f5e9";
            }}
            onMouseLeave={(e) => {
              if (selectedType !== "individual") e.target.style.backgroundColor = "white";
            }}
          >
            📌 Individual Courses
          </button>
          <button
            onClick={() => setSelectedType("package")}
            style={{
              padding: "12px 32px",
              backgroundColor: selectedType === "package" ? "#28a745" : "white",
              color: selectedType === "package" ? "white" : "#28a745",
              border: "2px solid #28a745",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              if (selectedType !== "package") e.target.style.backgroundColor = "#e8f5e9";
            }}
            onMouseLeave={(e) => {
              if (selectedType !== "package") e.target.style.backgroundColor = "white";
            }}
          >
            🎁 Complete Package
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "60px 40px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {selectedType === "individual" && (
            <div>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "10px", textAlign: "center" }}>
                Choose Your Courses
              </h2>
              <p style={{ fontSize: "14px", color: "#666", marginBottom: "40px", textAlign: "center" }}>
                4 advanced courses for professional growth
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px", marginBottom: "40px" }}>
                {professionalServices.map((service) => (
                  <div
                    key={service.id}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "12px",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                      overflow: "hidden",
                      transition: "all 0.3s",
                      border: "2px solid transparent",
                      display: "flex",
                      flexDirection: "column",
                      padding: "25px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.15)";
                      e.currentTarget.style.borderColor = service.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.08)";
                      e.currentTarget.style.borderColor = "transparent";
                    }}
                  >
                    <div style={{ fontSize: "40px", marginBottom: "15px" }}>{service.icon}</div>
                    <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#333", marginBottom: "8px" }}>{service.title}</h3>
                    <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px", flex: 1 }}>{service.description}</p>
                    <p style={{ fontSize: "11px", color: "#888", marginBottom: "15px", lineHeight: "1.5" }}>{service.details}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "18px", fontWeight: "bold", color: service.color }}>{service.price}</span>
                      <button
                        style={{
                          padding: "8px 16px",
                          backgroundColor: service.color,
                          color: "white",
                          border: "none",
                          borderRadius: "6px",
                          fontSize: "13px",
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
                        Enroll
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: "#e8f5e9", borderRadius: "12px", padding: "25px", textAlign: "center", border: "2px solid #28a745" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>Individual Courses Total</h3>
                <p style={{ fontSize: "28px", fontWeight: "bold", color: "#28a745" }}>${totalIndividualPrice}</p>
              </div>
            </div>
          )}

          {selectedType === "package" && (
            <div>
              <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "40px", textAlign: "center" }}>Complete Learning Package 🎁</h2>
              <div style={{ maxWidth: "900px", margin: "0 auto 50px", backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "16px", padding: "50px 40px", color: "white", boxShadow: "0 10px 40px rgba(102, 126, 234, 0.4)", textAlign: "center" }}>
                <h3 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "15px" }}>Everything You Need</h3>
                <p style={{ fontSize: "16px", opacity: 0.95, marginBottom: "30px" }}>All 4 courses + exclusive bonuses</p>

                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", borderRadius: "12px", padding: "25px", marginBottom: "30px" }}>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "15px" }}>
                    <div>
                      <p style={{ fontSize: "14px", opacity: 0.8, marginBottom: "5px" }}>Regular Price</p>
                      <p style={{ fontSize: "24px", fontWeight: "bold", textDecoration: "line-through", opacity: 0.8 }}>${totalIndividualPrice}</p>
                    </div>
                    <div style={{ fontSize: "28px", opacity: 0.6 }}>→</div>
                    <div>
                      <p style={{ fontSize: "14px", opacity: 0.8, marginBottom: "5px" }}>Package Price</p>
                      <p style={{ fontSize: "36px", fontWeight: "bold" }}>${packagePrice}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: "16px", fontWeight: "bold", color: "#4ade80" }}>Save ${savings} (40% OFF)</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px", marginBottom: "30px" }}>
                  {professionalServices.map((service) => (
                    <div key={service.id} style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", borderRadius: "10px", padding: "15px", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                      <div style={{ fontSize: "32px", marginBottom: "8px" }}>{service.icon}</div>
                      <p style={{ fontSize: "12px", fontWeight: "600", lineHeight: "1.4" }}>{service.title}</p>
                    </div>
                  ))}
                </div>

                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", borderRadius: "12px", padding: "25px", marginBottom: "30px", textAlign: "left" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "15px", textAlign: "center" }}>Additional Benefits</h4>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
                    <div>✅ Lifetime Access</div>
                    <div>✅ Expert Mentorship</div>
                    <div>✅ Mock Interviews</div>
                    <div>✅ Job Placement Support</div>
                    <div>✅ Certificate Included</div>
                    <div>✅ Community Access</div>
                    <div>✅ 1-on-1 Coaching</div>
                    <div>✅ Career Counseling</div>
                  </div>
                </div>

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
                    e.target.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  Get Complete Package
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
