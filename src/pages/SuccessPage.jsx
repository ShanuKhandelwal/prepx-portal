import { useLocation, useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const completeData = location.state || {};

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ color: "#4caf50" }}>✅ Payment Successful!</h2>
      
      <div style={{ background: "#d4edda", padding: "20px", borderRadius: "8px", marginBottom: "20px", border: "2px solid #4caf50" }}>
        <p><strong>Thank you for your enrollment!</strong></p>
        <p>Email: {completeData.email}</p>
        <p>Name: {completeData.fullName}</p>
        <p>Status: {completeData.paymentStatus}</p>
      </div>

      <button 
        onClick={() => navigate("/")}
        style={{ 
          padding: "10px 20px", 
          background: "#667eea", 
          color: "white", 
          border: "none", 
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Go to Home
      </button>
    </div>
  );
}
