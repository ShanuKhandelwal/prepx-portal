import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./CompletePackage.css";

export default function CompletePackage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const packageType = searchParams.get("type") || "fresher";

  const [showScheduling, setShowScheduling] = useState(false);
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedTime, setSelectedTime] = useState("");
  const [packageDetails, setPackageDetails] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const packageData = {
    fresher: {
      title: "Complete Fresher Package",
      description: "Everything you need to land your first tech job",
      originalPrice: 155,
      discount: 56,
      finalPrice: 99,
      courses: [
        "Resume Building Guide",
        "Technical Interview Preparation",
        "LinkedIn & Personal Branding",
        "Career Roadmap",
        "Job Search Strategy",
      ],
      benefits: [
        "5 Complete Courses",
        "Lifetime Access",
        "Expert Guidance",
        "Interview Preparation",
        "Job Search Support",
      ],
    },
    professional: {
      title: "Complete Professional Package",
      description: "Advance your career with expert-led courses",
      originalPrice: 155,
      discount: 26,
      finalPrice: 129,
      courses: [
        "Resume Building Guide",
        "Technical Interview Preparation",
        "LinkedIn & Personal Branding",
        "Career Roadmap",
        "Job Search Strategy",
      ],
      benefits: [
        "5 Complete Courses",
        "Lifetime Access",
        "Advanced Content",
        "Career Coaching",
        "Network Building",
      ],
    },
  };

  const package_ = packageData[packageType] || packageData.fresher;
  const TIME_SLOTS = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"];

  const getDateLabel = () => {
    const today = new Date();
    if (selectedDate === "today") {
      return today.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    } else {
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    }
  };

  const handleScheduleSubmit = () => {
    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }
    setPackageDetails({
      date: selectedDate,
      dateLabel: getDateLabel(),
      time: selectedTime,
    });
    setShowScheduling(false);
    setShowPayment(true);
  };

  const handleChangeSchedule = () => {
    setPackageDetails(null);
    setShowPayment(false);
    setShowScheduling(true);
  };

  const handlePaymentClick = () => {
    setTimeout(() => {
      setPaymentComplete(true);
    }, 2000);
  };

  const handleConfirm = () => {
    localStorage.setItem(`packageEnrollment_${packageType}`, JSON.stringify({
      type: packageType,
      enrolledAt: new Date().toISOString(),
      price: package_.finalPrice,
      date: packageDetails.dateLabel,
      time: packageDetails.time,
    }));
    navigate("/fresher-courses");
  };

  if (paymentComplete) {
    return (
      <div className="enrollment-success-container">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Package Purchase Successful!</h2>
          <p className="success-message">You've purchased {package_.title}</p>
          
          <div className="enrollment-details">
            <h3>Purchase Details</h3>
            <div className="detail-item">
              <span className="detail-label">Package:</span>
              <span className="detail-value">{package_.title}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">📅 Date:</span>
              <span className="detail-value">{packageDetails.dateLabel}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">🕐 Time:</span>
              <span className="detail-value">{packageDetails.time}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Amount Paid:</span>
              <span className="detail-value">${package_.finalPrice}</span>
            </div>
          </div>

          <button className="btn-continue" onClick={handleConfirm}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="complete-package-wrapper">
      <div className="package-container">
        <button className="btn-back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="package-hero">
          <h1>{package_.title}</h1>
          <p>{package_.description}</p>
        </div>

        <div className="package-main">
          <div className="package-content">
            <div className="pricing-section">
              <div className="price-comparison">
                <div className="original-price">
                  <span className="label">Original Price</span>
                  <span className="amount">${package_.originalPrice}</span>
                </div>
                <div className="discount-badge">
                  <span className="label">Save</span>
                  <span className="amount">${package_.discount}</span>
                </div>
                <div className="final-price">
                  <span className="label">Your Price</span>
                  <span className="amount">${package_.finalPrice}</span>
                </div>
              </div>
            </div>

            <div className="courses-section">
              <h3>📚 Included Courses:</h3>
              <ul className="courses-list">
                {package_.courses.map((course, index) => (
                  <li key={index}>
                    <span className="check-icon">✓</span>
                    <span className="course-name">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="benefits-section">
              <h3>🎁 Benefits:</h3>
              <ul className="benefits-list">
                {package_.benefits.map((benefit, index) => (
                  <li key={index}>
                    <span className="benefit-icon">⭐</span>
                    <span className="benefit-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn-buy-now" onClick={() => setShowScheduling(true)}>
              Schedule & Purchase - ${package_.finalPrice}
            </button>
          </div>
        </div>
      </div>

      {showScheduling && (
        <div className="modal-overlay" onClick={() => setShowScheduling(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>📅 Schedule Your Session</h2>
            <div className="scheduling-section">
              <label>Select Date:</label>
              <div className="date-options">
                <button className={`date-btn ${selectedDate === "today" ? "active" : ""}`} onClick={() => setSelectedDate("today")}>
                  Today
                </button>
                <button className={`date-btn ${selectedDate === "tomorrow" ? "active" : ""}`} onClick={() => setSelectedDate("tomorrow")}>
                  Tomorrow
                </button>
              </div>
            </div>
            <div className="scheduling-section">
              <label>Select Time Slot (12 PM - 5 PM):</label>
              <div className="time-slots">
                {TIME_SLOTS.map((time) => (
                  <button key={time} className={`time-slot ${selectedTime === time ? "active" : ""}`} onClick={() => setSelectedTime(time)}>
                    {time}
                  </button>
                ))}
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowScheduling(false)}>
                Cancel
              </button>
              <button className="btn-confirm" onClick={handleScheduleSubmit} disabled={!selectedTime}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {packageDetails && !showPayment && (
        <div className="enrollment-modal-wrapper">
          <div className="enrollment-modal">
            <button className="btn-close" onClick={() => setPackageDetails(null)}>✕</button>
            <div className="session-details">
              <h2>📅 Your Session Details</h2>
              <div className="detail-card">
                <span className="detail-icon">📅</span>
                <div className="detail-content">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{packageDetails.dateLabel}</span>
                </div>
              </div>
              <div className="detail-card">
                <span className="detail-icon">🕐</span>
                <div className="detail-content">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">{packageDetails.time}</span>
                </div>
              </div>
              <div className="detail-card">
                <span className="detail-icon">💰</span>
                <div className="detail-content">
                  <span className="detail-label">Amount</span>
                  <span className="detail-value">${package_.finalPrice}</span>
                </div>
              </div>
            </div>
            <div className="action-buttons">
              <button className="btn-change" onClick={handleChangeSchedule}>
                ← Change Schedule
              </button>
              <button className="btn-proceed" onClick={() => setShowPayment(true)}>
                Proceed to Payment →
              </button>
            </div>
          </div>
        </div>
      )}

      {showPayment && (
        <div className="enrollment-modal-wrapper">
          <div className="payment-modal">
            <button className="btn-close" onClick={() => setShowPayment(false)}>✕</button>
            <h2>💳 Complete Payment</h2>
            
            <div className="payment-summary">
              <div className="summary-row">
                <span>Package</span>
                <span>{package_.title}</span>
              </div>
              <div className="summary-row">
                <span>Session Date</span>
                <span>{packageDetails.dateLabel}</span>
              </div>
              <div className="summary-row">
                <span>Session Time</span>
                <span>{packageDetails.time}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-total">
                <span>Total Amount</span>
                <span>${package_.finalPrice}</span>
              </div>
            </div>

            <div className="qr-section">
              <h3>📱 Scan to pay via UPI</h3>
              <div className="qr-box">
                <img src="/qr-code.png" alt="UPI Payment QR" className="qr-code" />
              </div>
              <p className="upi-id">UPI ID: evalo@upi</p>
            </div>

            <div className="payment-buttons">
              <button className="btn-back-payment" onClick={() => setShowPayment(false)}>
                ← Back
              </button>
              <button className="btn-done" onClick={handlePaymentClick}>
                Payment Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
