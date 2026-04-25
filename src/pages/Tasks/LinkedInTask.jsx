import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";

export default function LinkedInTask() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const loading = authContext?.loading;

  const task = {
    icon: "🔄",
    title: "LinkedIn & Personal Branding",
    description: "Build your professional presence",
    price: "$24",
    keyPoints: [
      "Create a compelling LinkedIn profile headline that clearly communicates your professional identity and value proposition",
      "Write an engaging professional summary that tells your career story and attracts recruiters to your profile",
      "Optimize your experience section with relevant keywords and achievements that showcase your impact",
      "Build your personal brand by sharing insights, articles, and engaging with industry content regularly",
      "Network strategically by connecting with recruiters, mentors, and professionals in your target industry"
    ],
    color: "#45b7d1",
  };

  if (loading === false && !user) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <nav style={{ padding: "20px 40px", backgroundColor: "white", borderBottom: "1px solid #e9ecef", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/" style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff", textDecoration: "none" }}>
            Evalo
          </Link>
          <button onClick={() => navigate(-1)} style={{ padding: "8px 16px", backgroundColor: "#f8f9fa", color: "#007bff", border: "1px solid #007bff", borderRadius: "6px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
            ← Back
          </button>
        </nav>

        <div style={{ padding: "80px 40px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 80px)" }}>
          <div style={{ maxWidth: "500px", backgroundColor: "white", borderRadius: "12px", padding: "50px 40px", boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ fontSize: "56px", marginBottom: "20px" }}>🔐</div>
            <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "15px" }}>Sign In Required</h2>
            <p style={{ fontSize: "16px", color: "#666", marginBottom: "30px", lineHeight: "1.6" }}>
              Please sign in or create an account to access the course details and proceed with enrollment.
            </p>

            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
              <Link
                to={`/sign-in?redirect=task/linkedin`}
                style={{ padding: "14px 28px", backgroundColor: "#007bff", color: "white", textDecoration: "none", borderRadius: "8px", fontSize: "15px", fontWeight: "600", textAlign: "center", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = "#0056b3"; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = "#007bff"; }}
              >
                Sign In
              </Link>
              <Link
                to={`/create-account?redirect=task/linkedin`}
                style={{ padding: "14px 28px", backgroundColor: "white", color: "#007bff", textDecoration: "none", border: "2px solid #007bff", borderRadius: "8px", fontSize: "15px", fontWeight: "600", textAlign: "center", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = "#f0f8ff"; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = "white"; }}
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return null;
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <nav style={{ padding: "20px 40px", backgroundColor: "white", borderBottom: "1px solid #e9ecef", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/" style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff", textDecoration: "none" }}>
          Evalo
        </Link>
        <button onClick={() => navigate(-1)} style={{ padding: "8px 16px", backgroundColor: "#f8f9fa", color: "#007bff", border: "1px solid #007bff", borderRadius: "6px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
          ← Back
        </button>
      </nav>

      <div style={{ padding: "40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
            <div style={{ fontSize: "48px" }}>{task.icon}</div>
            <div>
              <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#333", marginBottom: "5px" }}>
                {task.title}
              </h1>
              <p style={{ fontSize: "16px", color: "#666" }}>
                {task.description}
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px" }}>
            <div>
              <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "30px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "20px", paddingBottom: "15px", borderBottom: `3px solid ${task.color}` }}>
                  What You'll Learn
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {task.keyPoints.map((point, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "15px", padding: "15px", backgroundColor: "#f8f9fa", borderRadius: "8px", borderLeft: `4px solid ${task.color}` }}>
                      <div style={{ minWidth: "24px", height: "24px", borderRadius: "50%", backgroundColor: task.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px", flexShrink: 0 }}>
                        {idx + 1}
                      </div>
                      <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6", margin: 0 }}>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "30px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)", textAlign: "center", position: "sticky", top: "20px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
                  Enroll Now
                </h3>

                <div style={{ backgroundColor: task.color, color: "white", padding: "25px", borderRadius: "12px", marginBottom: "25px" }}>
                  <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "5px" }}>
                    Course Price
                  </p>
                  <p style={{ fontSize: "48px", fontWeight: "bold", margin: 0 }}>
                    {task.price}
                  </p>
                </div>

                <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "12px", marginBottom: "25px" }}>
                  <p style={{ fontSize: "12px", color: "#666", marginBottom: "15px" }}>
                    Scan to pay via UPI
                  </p>
                  <div style={{ width: "150px", height: "150px", backgroundColor: "white", border: "2px solid #ddd", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", fontSize: "24px" }}>
                    📱 QR Code
                  </div>
                </div>

                <p style={{ fontSize: "11px", color: "#999", marginTop: "15px" }}>
                  Scan the QR code above to complete your payment
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "50px", backgroundColor: "white", borderRadius: "12px", padding: "20px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)", border: "2px solid #007bff" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", flexWrap: "wrap" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#007bff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px", flexShrink: 0 }}>
                👤
              </div>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#333", margin: "0 0 3px 0" }}>Shanu Khandelwal</h3>
                <p style={{ fontSize: "12px", color: "#666", margin: "0 0 8px 0" }}>Course Instructor & Support</p>
                <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", fontSize: "12px" }}>
                  <a href="tel:9529168106" style={{ color: "#007bff", textDecoration: "none", fontWeight: "600" }}>📱 +91 9529168106</a>
                  <a href="mailto:Shanu.khandelwal121@gmail.com" style={{ color: "#007bff", textDecoration: "none", fontWeight: "600" }}>📧 Shanu.khandelwal121@gmail.com</a>
                  <a href="https://linkedin.com/in/shanu-khandelwal-104214237" target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "none", fontWeight: "600" }}>💼 LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
