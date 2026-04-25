import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NonITProfessionalInterviewTypes.css";

export default function NonITProfessionalInterviewTypes() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);

  const interviewTypes = [
    {
      id: 1,
      title: "HR & Behavioral",
      icon: "🧑‍🤝‍🧑",
      color: "#e74c3c",
      items: [
        "HR Interview (General HR Round)",
        "Behavioral Interview",
        "Group Discussion (GD)"
      ]
    },
    {
      id: 2,
      title: "Business & Management",
      icon: "📈",
      color: "#3498db",
      items: [
        "MBA Interview",
        "Business Analyst Interview",
        "Product Manager Interview",
        "Project Manager Interview",
        "Operations Manager Interview"
      ]
    },
    {
      id: 3,
      title: "Finance",
      icon: "💰",
      color: "#f39c12",
      items: [
        "Accountant Interview",
        "Financial Analyst Interview",
        "Investment Banking Interview",
        "Banking Interview (PO/Clerk)"
      ]
    },
    {
      id: 4,
      title: "Sales & Marketing",
      icon: "🛍️",
      color: "#16a085",
      items: [
        "Digital Marketing Interview",
        "SEO Interview",
        "SEM Interview",
        "Content Marketing Interview",
        "Social Media Manager Interview",
        "Performance Marketing Interview",
        "Sales Executive Interview",
        "Business Development Interview",
        "Account Manager Interview"
      ]
    },
    {
      id: 5,
      title: "HR & Recruitment",
      icon: "🏢",
      color: "#c0392b",
      items: [
        "HR Recruiter Interview",
        "Talent Acquisition Interview"
      ]
    },
    {
      id: 6,
      title: "Education",
      icon: "🧑‍🏫",
      color: "#8e44ad",
      items: [
        "Teacher Interview",
        "Lecturer Interview",
        "Professor Interview"
      ]
    },
    {
      id: 7,
      title: "Government Jobs",
      icon: "⚖️",
      color: "#2980b9",
      items: [
        "UPSC Interview",
        "SSC Interview",
        "Banking Government Interview",
        "Railway Interview"
      ]
    },
    {
      id: 8,
      title: "Healthcare",
      icon: "🏥",
      color: "#27ae60",
      items: [
        "Nurse Interview",
        "Medical Representative Interview",
        "Pharmacist Interview",
        "Hospital Administration Interview"
      ]
    },
    {
      id: 9,
      title: "Creative Roles",
      icon: "🎨",
      color: "#9b59b6",
      items: [
        "Graphic Designer Interview",
        "UI/UX Designer Interview",
        "Content Writer Interview",
        "Copywriter Interview",
        "Video Editor Interview"
      ]
    },
    {
      id: 10,
      title: "Service Industry",
      icon: "☎️",
      color: "#e67e22",
      items: [
        "Customer Support Interview",
        "Call Center Interview",
        "BPO Interview",
        "Hotel Management Interview",
        "Hospitality Interview",
        "Travel & Tourism Interview"
      ]
    }
  ];

  const handleSelectType = (typeTitle) => {
    setSelectedType(typeTitle);
  };

  const handleNext = () => {
    if (selectedType) {
      navigate("/non-it-professional-courses", { 
        state: { interviewType: selectedType } 
      });
    }
  };

  return (
    <div className="non-it-professional-interview-types-wrapper">
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
          <h1>📈 Non-IT Professional Interview Types</h1>
          <p>Select one interview type you want to prepare for</p>
        </div>

        <div className="interview-types-list">
          {interviewTypes.map((category) => (
            <div key={category.id} className="interview-category">
              <h2 className="category-title">{category.icon} {category.title}</h2>
              <div className="interview-items-grid">
                {category.items.map((item, index) => (
                  <button
                    key={index}
                    className={`interview-item-btn ${selectedType === item ? "active" : ""}`}
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
            {selectedType && <span>Selected: <strong>{selectedType}</strong></span>}
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
