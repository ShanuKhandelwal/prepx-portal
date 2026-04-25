import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const topInterviewees = [
    {
      id: 1,
      name: "Shanu Khandelwal",
      title: "Senior Specialist - Software Engineer",
      company: "LTIMindtree",
      image: "👨‍💼",
      rating: 4.9,
      reviews: 250,
      contact: "+91 9529168106",
      email: "shanu.khandelwal121@gmail.com",
      linkedin: "https://linkedin.com/in/shanu-khandelwal-104214237",
      bgColor: "#e3f2fd",
    },
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % topInterviewees.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + topInterviewees.length) % topInterviewees.length);
    setIsAutoPlay(false);
  };

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
            Welcome to Evalo!!
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

      {/* Top Interviewees Slider Section */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "80px 40px",
          borderTop: "1px solid #e9ecef",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background elements */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "200px",
            height: "200px",
            backgroundColor: "#007bff",
            borderRadius: "50%",
            opacity: 0.05,
            animation: "float 6s ease-in-out infinite",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "-50px",
            left: "-50px",
            width: "200px",
            height: "200px",
            backgroundColor: "#28a745",
            borderRadius: "50%",
            opacity: 0.05,
            animation: "float 8s ease-in-out infinite reverse",
          }}
        ></div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(20px); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes pulse {
            0%, 100% { box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08); }
            50% { box-shadow: 0 8px 32px rgba(0, 123, 255, 0.2); }
          }
          @keyframes arrowPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}</style>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h3
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "10px",
              textAlign: "center",
              letterSpacing: "-0.5px",
            }}
          >
            ⭐ Meet Our Top Interviewers
          </h3>
          <p
            style={{
              fontSize: "17px",
              color: "#666",
              marginBottom: "50px",
              textAlign: "center",
              letterSpacing: "0.3px",
              fontWeight: "500",
            }}
          >
            Learn from experienced professionals who have guided hundreds of candidates to success
          </p>

          {/* Slider Container */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {/* Previous Button - Improved Design */}
            <button
              onClick={prevSlide}
              style={{
                position: "absolute",
                left: "-80px",
                zIndex: "10",
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                backgroundColor: "white",
                color: "#007bff",
                border: "2px solid #007bff",
                fontSize: "28px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                boxShadow: "0 4px 16px rgba(0, 123, 255, 0.2)",
                fontWeight: "bold",
                lineHeight: "1",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#007bff";
                e.target.style.color = "white";
                e.target.style.transform = "scale(1.15) translateX(-5px)";
                e.target.style.boxShadow = "0 10px 32px rgba(0, 123, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#007bff";
                e.target.style.transform = "scale(1) translateX(0)";
                e.target.style.boxShadow = "0 4px 16px rgba(0, 123, 255, 0.2)";
              }}
            >
              ‹
            </button>

            {/* Slides */}
            <div
              style={{
                flex: 1,
                maxWidth: "850px",
                overflow: "hidden",
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {topInterviewees.map((interviewer) => (
                  <div
                    key={interviewer.id}
                    style={{
                      minWidth: "100%",
                      padding: "50px 30px",
                      backgroundColor: "white",
                      borderRadius: "16px",
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Background gradient */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: `linear-gradient(90deg, #007bff, #28a745)`,
                      }}
                    ></div>

                    {/* Avatar with background */}
                    <div
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        backgroundColor: interviewer.bgColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "80px",
                        marginBottom: "25px",
                        boxShadow: "0 8px 24px rgba(0, 123, 255, 0.15)",
                        animation: "slideIn 0.6s ease-out",
                      }}
                    >
                      {interviewer.image}
                    </div>

                    {/* Name - Enhanced Typography */}
                    <h4
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#333",
                        marginBottom: "8px",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {interviewer.name}
                    </h4>

                    {/* Title & Company - Enhanced Typography */}
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#007bff",
                        fontWeight: "700",
                        marginBottom: "6px",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {interviewer.title}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#999",
                        marginBottom: "20px",
                        fontWeight: "500",
                      }}
                    >
                      @ {interviewer.company}
                    </p>

                    {/* Rating Badge */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        backgroundColor: "#fff3cd",
                        padding: "10px 18px",
                        borderRadius: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      <span style={{ fontSize: "16px" }}>⭐</span>
                      <span style={{ fontSize: "15px", fontWeight: "700", color: "#333" }}>
                        {interviewer.rating}
                      </span>
                      <span style={{ fontSize: "13px", color: "#999", fontWeight: "600" }}>
                        ({interviewer.reviews})
                      </span>
                    </div>

                    {/* Bio - Enhanced Typography */}
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        lineHeight: "1.8",
                        marginBottom: "30px",
                        maxWidth: "600px",
                        fontWeight: "500",
                      }}
                    >
                      {interviewer.bio}
                    </p>

                    {/* Divider */}
                    <div
                      style={{
                        height: "1px",
                        backgroundColor: "#e9ecef",
                        width: "100%",
                        marginBottom: "30px",
                      }}
                    ></div>

                    {/* Contact Info */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "15px",
                        width: "100%",
                        marginBottom: "30px",
                      }}
                    >
                      <a
                        href={`tel:${interviewer.contact}`}
                        style={{
                          fontSize: "13px",
                          color: "#007bff",
                          textDecoration: "none",
                          fontWeight: "600",
                          padding: "10px",
                          borderRadius: "8px",
                          transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#e3f2fd";
                          e.target.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.transform = "scale(1)";
                        }}
                      >
                        📱<br /> {interviewer.contact.split(" ").slice(-1)[0]}
                      </a>
                      <a
                        href={`mailto:${interviewer.email}`}
                        style={{
                          fontSize: "13px",
                          color: "#007bff",
                          textDecoration: "none",
                          fontWeight: "600",
                          padding: "10px",
                          borderRadius: "8px",
                          transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#e3f2fd";
                          e.target.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.transform = "scale(1)";
                        }}
                      >
                        📧<br /> Email
                      </a>
                      <a
                        href={interviewer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "13px",
                          color: "#007bff",
                          textDecoration: "none",
                          fontWeight: "600",
                          padding: "10px",
                          borderRadius: "8px",
                          transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#e3f2fd";
                          e.target.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.transform = "scale(1)";
                        }}
                      >
                        💼<br /> LinkedIn
                      </a>
                    </div>

                    {/* Book Session Button */}
                    <button
                      style={{
                        width: "100%",
                        padding: "14px 24px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "15px",
                        fontWeight: "700",
                        cursor: "pointer",
                        transition: "all 0.3s",
                        boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
                        letterSpacing: "0.3px",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#0056b3";
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow = "0 8px 24px rgba(0, 123, 255, 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#007bff";
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 4px 12px rgba(0, 123, 255, 0.3)";
                      }}
                    >
                      🎤 Book a Session
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button - Improved Design */}
            <button
              onClick={nextSlide}
              style={{
                position: "absolute",
                right: "-80px",
                zIndex: "10",
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                backgroundColor: "white",
                color: "#007bff",
                border: "2px solid #007bff",
                fontSize: "28px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                boxShadow: "0 4px 16px rgba(0, 123, 255, 0.2)",
                fontWeight: "bold",
                lineHeight: "1",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#007bff";
                e.target.style.color = "white";
                e.target.style.transform = "scale(1.15) translateX(5px)";
                e.target.style.boxShadow = "0 10px 32px rgba(0, 123, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#007bff";
                e.target.style.transform = "scale(1) translateX(0)";
                e.target.style.boxShadow = "0 4px 16px rgba(0, 123, 255, 0.2)";
              }}
            >
              ›
            </button>
          </div>

          {/* Slider Indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginTop: "40px",
            }}
          >
            {topInterviewees.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlide(idx);
                  setIsAutoPlay(false);
                }}
                style={{
                  width: idx === currentSlide ? "30px" : "12px",
                  height: "12px",
                  borderRadius: "6px",
                  backgroundColor: idx === currentSlide ? "#007bff" : "#ddd",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: idx === currentSlide ? "0 4px 12px rgba(0, 123, 255, 0.3)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (idx !== currentSlide) {
                    e.target.style.backgroundColor = "#bbb";
                  }
                }}
                onMouseLeave={(e) => {
                  if (idx !== currentSlide) {
                    e.target.style.backgroundColor = "#ddd";
                  }
                }}
              />
            ))}
          </div>

          {/* Slide counter */}
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "14px",
              color: "#999",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            {currentSlide + 1} / {topInterviewees.length}
          </div>
        </div>
      </div>
    </div>
  );
}
