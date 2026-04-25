import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ITCoursesSelection() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const navigate = useNavigate();

  const allCourses = {
    "Development": {
      color: "#007bff",
      courses: ["Java Developer Interview", "Python Developer Interview", "C++ Developer Interview", "C Developer Interview", "JavaScript Developer Interview", "TypeScript Developer Interview", "Golang Developer Interview", "Rust Developer Interview", "Frontend Developer Interview", "Backend Developer Interview", "Full Stack Developer Interview", "React Developer Interview", "Angular Developer Interview", "Vue.js Developer Interview", "Node.js Developer Interview", "Spring Boot Developer Interview", "Django Developer Interview", "Flask Developer Interview", "Express.js Developer Interview"]
    },
    "Core Computer Science": {
      color: "#e74c3c",
      courses: ["Data Structures & Algorithms Interview", "Coding Interview Preparation", "Competitive Programming Interview", "System Design Interview (HLD)", "Low Level Design Interview (LLD)"]
    },
    "Database": {
      color: "#3498db",
      courses: ["SQL Interview", "MySQL Interview", "PostgreSQL Interview", "MongoDB Interview", "Database Design Interview"]
    },
    "Testing": {
      color: "#f39c12",
      courses: ["Manual Testing Interview", "Automation Testing Interview", "Selenium Interview", "API Testing Interview", "Performance Testing Interview", "Mobile Testing Interview", "SDET Interview"]
    },
    "DevOps & Cloud": {
      color: "#16a085",
      courses: ["DevOps Engineer Interview", "Site Reliability Engineer (SRE) Interview", "AWS Interview", "Azure Interview", "Google Cloud Interview", "Docker Interview", "Kubernetes Interview", "CI/CD Interview", "Linux Interview", "Shell Scripting Interview"]
    },
    "Security & Networking": {
      color: "#c0392b",
      courses: ["Cyber Security Interview", "Ethical Hacking Interview", "Network Engineer Interview"]
    },
    "Data & AI": {
      color: "#8e44ad",
      courses: ["Data Analyst Interview", "Data Scientist Interview", "Machine Learning Interview", "Deep Learning Interview", "AI Engineer Interview", "Business Intelligence Interview"]
    },
    "Mobile Development": {
      color: "#27ae60",
      courses: ["Android Developer Interview", "iOS Developer Interview", "Flutter Developer Interview", "React Native Developer Interview"]
    },
    "Emerging Tech": {
      color: "#2980b9",
      courses: ["Blockchain Developer Interview", "Web3 Developer Interview"]
    }
  };

  const categoryIcons = {
    "Development": "💻",
    "Core Computer Science": "🧠",
    "Database": "🗄️",
    "Testing": "🧪",
    "DevOps & Cloud": "☁️",
    "Security & Networking": "🔐",
    "Data & AI": "📊",
    "Mobile Development": "📱",
    "Emerging Tech": "🚀"
  };

  const toggleCourse = (course) => {
    setSelectedCourses((prev) =>
      prev.includes(course) ? prev.filter((c) => c !== course) : [...prev, course]
    );
  };

  const handleNext = () => {
    if (selectedCourses.length === 0) {
      alert("Please select at least one course");
      return;
    }
    navigate("/learning-type-selection", { state: { selectedCourses } });
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", display: "flex", flexDirection: "column" }}>
      {/* Navigation Bar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", backgroundColor: "#f8f9fa", borderBottom: "1px solid #e9ecef" }}>
        <Link to="/" style={{ fontSize: "28px", fontWeight: "bold", color: "#007bff", textDecoration: "none", cursor: "pointer" }}>
          Evalo
        </Link>
        <Link to="/candidate-type/it" style={{ padding: "8px 16px", backgroundColor: "#f8f9fa", color: "#007bff", textDecoration: "none", borderRadius: "6px", border: "1px solid #007bff", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
          ← Back
        </Link>
      </nav>

      {/* Header Section */}
      <div style={{ padding: "40px", textAlign: "center", backgroundColor: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)", backgroundImage: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)", color: "white" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "10px" }}>IT Background Interview Prep 🧑‍💼</h1>
        <p style={{ fontSize: "16px", opacity: 0.95 }}>Select courses that match your specialization</p>
      </div>

      {/* Courses Selection Section */}
      <div style={{ flex: 1, padding: "60px 40px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {Object.entries(allCourses).map(([category, data]) => (
            <div key={category} style={{ marginBottom: "50px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "bold", color: data.color, marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "28px" }}>{categoryIcons[category]}</span>
                {category}
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px" }}>
                {data.courses.map((course, idx) => (
                  <div
                    key={idx}
                    onClick={() => toggleCourse(course)}
                    style={{
                      padding: "16px 20px",
                      backgroundColor: selectedCourses.includes(course) ? data.color : "white",
                      color: selectedCourses.includes(course) ? "white" : "#333",
                      border: `2px solid ${data.color}`,
                      borderRadius: "8px",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = `0 8px 16px ${data.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                      <input
                        type="checkbox"
                        checked={selectedCourses.includes(course)}
                        onChange={() => {}}
                        style={{ width: "18px", height: "18px", cursor: "pointer" }}
                      />
                      <span>{course}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section with Selected Count and Next Button */}
      <div style={{ padding: "40px", backgroundColor: "#f8f9fa", borderTop: "1px solid #e9ecef", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ fontSize: "16px", fontWeight: "600", color: "#333" }}>
          {selectedCourses.length > 0 && (
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ backgroundColor: "#007bff", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "14px" }}>
                {selectedCourses.length} selected
              </span>
              <div style={{ maxWidth: "400px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {selectedCourses.slice(0, 3).map((course, idx) => (
                  <span key={idx} style={{ backgroundColor: "#e9ecef", padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>
                    {course.length > 20 ? course.substring(0, 20) + "..." : course}
                  </span>
                ))}
                {selectedCourses.length > 3 && (
                  <span style={{ color: "#666", fontSize: "12px" }}>
                    +{selectedCourses.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
        <button
          onClick={handleNext}
          disabled={selectedCourses.length === 0}
          style={{
            padding: "14px 40px",
            backgroundColor: selectedCourses.length > 0 ? "#007bff" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: selectedCourses.length > 0 ? "pointer" : "not-allowed",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            if (selectedCourses.length > 0) {
              e.target.style.backgroundColor = "#0056b3";
              e.target.style.transform = "scale(1.05)";
            }
          }}
          onMouseLeave={(e) => {
            if (selectedCourses.length > 0) {
              e.target.style.backgroundColor = "#007bff";
              e.target.style.transform = "scale(1)";
            }
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
