import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import "../styles/PaymentScanner.css";

export default function PaymentScanner() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { ownerDetails, serviceDetails } = location.state || {};
  const [paymentScanned, setPaymentScanned] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleScanSuccess = () => {
    setPaymentScanned(true);
  };

  return (
    <div className="payment-scanner-page">
      {/* Top Bar */}
      <div className="topbar">
        <button className="btn btn-outline btn-sm" onClick={() => navigate(-1)}>← Back</button>
        <span className="badge">{user?.email}</span>
        <button className="btn btn-outline btn-sm" onClick={handleLogout}>Logout</button>
      </div>

      {/* Main Content */}
      <div className="scanner-container">
        {!paymentScanned ? (
          <>
            {/* Scanner Section */}
            <div className="scanner-card">
              <h1 className="scanner-title">💳 Complete Payment</h1>
              <p className="scanner-subtitle">Scan the QR code to make payment</p>

              {/* Owner Details Card */}
              {ownerDetails && (
                <div className="owner-details-card">
                  <h3>Payment Details</h3>
                  <div className="owner-info">
                    <p><strong>Owner:</strong> {ownerDetails.name}</p>
                    <p><strong>Email:</strong> <a href={`mailto:${ownerDetails.email}`}>{ownerDetails.email}</a></p>
                    <p><strong>LinkedIn:</strong> <a href={`https://${ownerDetails.linkedin}`} target="_blank" rel="noopener noreferrer">{ownerDetails.linkedin}</a></p>
                  </div>
                </div>
              )}

              {/* Service Details */}
              {serviceDetails && (
                <div className="service-details-card">
                  <h3>Service Information</h3>
                  <div className="service-info">
                    <p><strong>Service:</strong> {serviceDetails.service}</p>
                    <p><strong>Amount:</strong> ₹{serviceDetails.price}</p>
                    <p><strong>Turnaround:</strong> {serviceDetails.turnaround}</p>
                  </div>
                </div>
              )}

              {/* QR Code Scanner Area */}
              <div className="qr-scanner-area">
                <svg 
                  className="payment-qr-code-large" 
                  viewBox="0 0 300 300" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Dummy Payment QR Code SVG */}
                  <rect width="300" height="300" fill="white" stroke="#667eea" strokeWidth="3"/>
                  
                  {/* Position Detection Patterns */}
                  <rect x="20" y="20" width="60" height="60" fill="black" stroke="white" strokeWidth="2"/>
                  <rect x="35" y="35" width="30" height="30" fill="white"/>
                  <rect x="42" y="42" width="16" height="16" fill="black"/>
                  
                  <rect x="220" y="20" width="60" height="60" fill="black" stroke="white" strokeWidth="2"/>
                  <rect x="235" y="35" width="30" height="30" fill="white"/>
                  <rect x="242" y="42" width="16" height="16" fill="black"/>
                  
                  <rect x="20" y="220" width="60" height="60" fill="black" stroke="white" strokeWidth="2"/>
                  <rect x="35" y="235" width="30" height="30" fill="white"/>
                  <rect x="42" y="242" width="16" height="16" fill="black"/>

                  {/* Timing patterns */}
                  <line x1="85" y1="30" x2="220" y2="30" stroke="black" strokeWidth="2"/>
                  <line x1="30" y1="85" x2="30" y2="220" stroke="black" strokeWidth="2"/>

                  {/* Data area */}
                  <rect x="100" y="100" width="100" height="100" fill="white"/>
                  <circle cx="115" cy="115" r="3" fill="black"/>
                  <circle cx="135" cy="125" r="3" fill="black"/>
                  <circle cx="155" cy="140" r="3" fill="black"/>
                  <circle cx="175" cy="160" r="3" fill="black"/>
                  <circle cx="125" cy="175" r="3" fill="black"/>
                  <circle cx="145" cy="190" r="3" fill="black"/>
                  <circle cx="165" cy="165" r="3" fill="black"/>
                  <circle cx="120" cy="150" r="3" fill="black"/>
                  <circle cx="160" cy="130" r="3" fill="black"/>
                  <circle cx="140" cy="170" r="3" fill="black"/>
                  <circle cx="110" cy="160" r="3" fill="black"/>
                  <circle cx="170" cy="120" r="3" fill="black"/>
                  <circle cx="130" cy="135" r="3" fill="black"/>
                  <circle cx="150" cy="155" r="3" fill="black"/>
                </svg>

                <p className="scanner-instruction">📱 Use your phone to scan this QR code</p>
                <button 
                  className="payment-done-btn"
                  onClick={handleScanSuccess}
                >
                  ✓ Payment Done
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Success Message */}
            <div className="payment-success-card">
              <h1 className="success-title">✅ Payment Successful!</h1>
              <p className="success-message">🎉 Your payment has been processed successfully!</p>

              {/* Confirmation */}
              <div className="confirmation-card">
                <h3>What Happens Next?</h3>
                <div className="confirmation-steps">
                  <p><strong>✓ Payment Status:</strong> Confirmed</p>
                  <p><strong>✓ Owner Notification:</strong> Shanu has been notified</p>
                  <p><strong>✓ Professional Assignment:</strong> A professional will be assigned within 2 hours</p>
                  <p><strong>✓ Contact:</strong> You will receive contact details shortly</p>
                </div>
              </div>

              <button 
                className="back-to-dashboard-btn"
                onClick={() => {
                  navigate("/fresher");
                }}
              >
                ← Back to Dashboard
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
