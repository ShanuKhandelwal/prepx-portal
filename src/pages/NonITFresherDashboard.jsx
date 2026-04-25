import { Link, useNavigate } from "react-router-dom";

export default function NonITFresherDashboard() {
  const navigate = useNavigate();

  const quickStats = [
    { label: "Courses Completed", value: "0", icon: "📚" },
    { label: "Hours Learned", value: "0", icon: "⏱️" },
    { label: "Skills Gained", value: "0", icon: "🎯" },
    { label: "Progress", value: "0%", icon: "📈" },
  ];

  const enrolledCourses = [
    {
      id: 1,
      icon: "📝",
      title: "Resume Building Guide",
      progress: 0,
      status: "Not Started",
    },
    {
      id: 2,
      icon: "💬",
      title: "Technical Interview Preparation",
      progress: 0,
      status: "Not Started",
    },
    {
      id: 3,
      icon: "🔄",
      title: "LinkedIn & Personal Branding",
      progress: 0,
      status: "Not Started",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Navigation */}
      <nav
        style={{
          padding: "20px 40px",
          backgroundColor: "white",
          borderBottom: "1px solid #e9ecef",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "28px", fontWeight: "bold", color: "#28a745" }}>
          Evalo
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link
            to="/fresher-courses"
            style={{
              padding: "8px 16px",
              backgroundColor: "#28a745",
              color: "white",
              textDecoration: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Browse Courses
          </Link>
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#f8f9fa",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ padding: "40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Welcome Section */}
          <div
            style={{
              backgroundColor: "linear-gradient(135deg, #28a745 0%, #1e7e34 100%)",
              backgroundImage: "linear-gradient(135deg, #28a745 0%, #1e7e34 100%)",
              color: "white",
              padding: "40px",
              borderRadius: "12px",
              marginBottom: "40px",
            }}
          >
            <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "10px" }}>
              Welcome to Your Learning Journey! 👋
            </h1>
            <p style={{ fontSize: "16px", opacity: 0.95 }}>
              Career Switcher Track - Master the fundamentals needed to succeed in tech
            </p>
          </div>

          {/* Quick Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {quickStats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "32px", marginBottom: "10px" }}>{stat.icon}</div>
                <div style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Enrolled Courses */}
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
              Your Courses
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "12px" }}>
                    {course.icon}
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>
                    {course.title}
                  </h3>
                  <div style={{ marginBottom: "12px" }}>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#666",
                        marginBottom: "6px",
                      }}
                    >
                      Progress: {course.progress}%
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "8px",
                        backgroundColor: "#e9ecef",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${course.progress}%`,
                          backgroundColor: "#28a745",
                        }}
                      />
                    </div>
                  </div>
                  <button
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      backgroundColor: "#28a745",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Continue Learning
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Mock Interview Section */}
          <div style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
              🎤 Mock Interview Practice
            </h2>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "30px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "15px" }}>🎬</div>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#333", marginBottom: "12px" }}>
                Practice Tech Interviews for Career Switchers
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", marginBottom: "20px" }}>
                Get comfortable with tech interview formats. Practice basic technical questions and behavioral interviews tailored for career switchers entering tech.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px", marginBottom: "20px" }}>
                <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "8px" }}>
                  <div style={{ fontSize: "24px", fontWeight: "bold", color: "#28a745" }}>0</div>
                  <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>Interviews Completed</div>
                </div>
                <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "8px" }}>
                  <div style={{ fontSize: "24px", fontWeight: "bold", color: "#28a745" }}>0%</div>
                  <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>Average Score</div>
                </div>
                <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "8px" }}>
                  <div style={{ fontSize: "24px", fontWeight: "bold", color: "#28a745" }}>0</div>
                  <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>Hours Practiced</div>
                </div>
              </div>
              <button
                onClick={() => navigate("/sign-in")}
                style={{
                  padding: "12px 32px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "15px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#1e7e34";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#28a745";
                  e.target.style.transform = "scale(1)";
                }}
              >
                Start Mock Interview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
