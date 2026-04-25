import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfessionalInterviewTypes.css";

export default function ProfessionalInterviewTypes() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);

  const interviewTypes = [
    {
      id: 1,
      icon: "💻",
      title: "Programming Languages",
      items: [
        "Java Developer Interview",
        "Python Developer Interview",
        "C++ Developer Interview",
        "C Developer Interview",
        "JavaScript Developer Interview",
        "TypeScript Developer Interview",
        "Golang Developer Interview",
        "Rust Developer Interview",
      ],
    },
    {
      id: 2,
      icon: "🎨",
      title: "Development Roles",
      items: [
        "Frontend Developer Interview",
        "Backend Developer Interview",
        "Full Stack Developer Interview",
      ],
    },
    {
      id: 3,
      icon: "⚛️",
      title: "Frontend Frameworks",
      items: [
        "React Developer Interview",
        "Angular Developer Interview",
        "Vue.js Developer Interview",
      ],
    },
    {
      id: 4,
      icon: "🔧",
      title: "Backend Frameworks",
      items: [
        "Node.js Developer Interview",
        "Spring Boot Developer Interview",
        "Django Developer Interview",
        "Flask Developer Interview",
        "Express.js Developer Interview",
      ],
    },
    {
      id: 5,
      icon: "🧠",
      title: "Core Computer Science",
      items: [
        "Data Structures & Algorithms Interview",
        "Coding Interview Preparation",
        "Competitive Programming Interview",
        "System Design Interview (HLD)",
        "Low Level Design Interview (LLD)",
      ],
    },
    {
      id: 6,
      icon: "🗄️",
      title: "Database",
      items: [
        "SQL Interview",
        "MySQL Interview",
        "PostgreSQL Interview",
        "MongoDB Interview",
        "Database Design Interview",
      ],
    },
    {
      id: 7,
      icon: "🧪",
      title: "Testing",
      items: [
        "Manual Testing Interview",
        "Automation Testing Interview",
        "Selenium Interview",
        "API Testing Interview",
        "Performance Testing Interview",
        "Mobile Testing Interview",
        "SDET Interview",
      ],
    },
    {
      id: 8,
      icon: "☁️",
      title: "DevOps & Cloud",
      items: [
        "DevOps Engineer Interview",
        "Site Reliability Engineer (SRE) Interview",
        "AWS Interview",
        "Azure Interview",
        "Google Cloud Interview",
        "Docker Interview",
        "Kubernetes Interview",
        "CI/CD Interview",
        "Linux Interview",
        "Shell Scripting Interview",
      ],
    },
    {
      id: 9,
      icon: "🔐",
      title: "Security & Networking",
      items: [
        "Cyber Security Interview",
        "Ethical Hacking Interview",
        "Network Engineer Interview",
      ],
    },
    {
      id: 10,
      icon: "📊",
      title: "Data & AI",
      items: [
        "Data Analyst Interview",
        "Data Scientist Interview",
        "Machine Learning Interview",
        "Deep Learning Interview",
        "AI Engineer Interview",
        "Business Intelligence Interview",
      ],
    },
    {
      id: 11,
      icon: "📱",
      title: "Mobile Development",
      items: [
        "Android Developer Interview",
        "iOS Developer Interview",
        "Flutter Developer Interview",
        "React Native Developer Interview",
      ],
    },
    {
      id: 12,
      icon: "🚀",
      title: "Emerging Tech",
      items: [
        "Blockchain Developer Interview",
        "Web3 Developer Interview",
      ],
    },
  ];

  const handleSelectType = (typeTitle) => {
    setSelectedType(typeTitle);
  };

  const handleNext = () => {
    if (selectedType) {
      navigate("/professional-courses", {
        state: { interviewType: selectedType },
      });
    }
  };

  return (
    <div className="professional-interview-types-wrapper">
      <div className="interview-types-container">
        <div className="top-bar">
          <div className="logo-section">
            <h2 className="logo">Evalo</h2>
          </div>
          <button className="back-button" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div>

        <div className="page-header">
          <h1>📈 Development Interview Types</h1>
          <p>Select one interview type you want to prepare for</p>
        </div>

        <div className="interview-types-list">
          {interviewTypes.map((category) => (
            <div key={category.id} className="interview-category">
              <h2 className="category-title">
                {category.icon} {category.title}
              </h2>
              <div className="interview-items-grid">
                {category.items.map((item, index) => (
                  <button
                    key={index}
                    className={`interview-item-btn ${
                      selectedType === item ? "active" : ""
                    }`}
                    onClick={() => handleSelectType(item)}
                  >
                    <span className="radio-circle"></span>
                    <span className="item-text">{item}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="button-footer">
          <div className="selected-type-display">
            {selectedType && (
              <span>
                Selected: <strong>{selectedType}</strong>
              </span>
            )}
          </div>
          <button
            className="btn-next"
            onClick={handleNext}
            disabled={!selectedType}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
