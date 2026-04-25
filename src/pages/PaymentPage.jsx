import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const enrollmentData = location.state || {};

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store complete enrollment data
      const completeData = {
        ...enrollmentData,
        paymentStatus: "completed",
        paymentDate: new Date().toLocaleString(),
      };
      
      sessionStorage.setItem("completeEnrollmentData", JSON.stringify(completeData));
      
      // Redirect to success
      navigate("/success", { state: completeData });
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Payment Page</h2>
      <div style={{ background: "#f5f5f5", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
        <p><strong>Email:</strong> {enrollmentData.email}</p>
        <p><strong>Name:</strong> {enrollmentData.fullName}</p>
        <p><strong>Contact:</strong> {enrollmentData.contactNumber}</p>
      </div>
      <button 
        onClick={handlePayment}
        disabled={loading}
        style={{ 
          padding: "10px 20px", 
          background: "#667eea", 
          color: "white", 
          border: "none", 
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        {loading ? "Processing..." : "Complete Payment"}
      </button>
    </div>
  );
}
