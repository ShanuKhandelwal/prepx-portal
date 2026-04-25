import { useState } from "react";

export default function EmailTestPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleTestEmail = async () => {
    setLoading(true);
    setMessage("");
    setMessageType("");
    setResponseData(null);

    try {
      console.log("🧪 [EMAIL TEST] Starting test email...");
      console.log("🧪 [EMAIL TEST] Backend URL: http://localhost:5001/api/test-email");
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch("http://localhost:5001/api/test-email", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log("✅ [EMAIL TEST] Response received");
      console.log("📊 [EMAIL TEST] Status:", response.status);
      
      const data = await response.json();
      console.log("📦 [EMAIL TEST] Response data:", data);

      setResponseData(data);

      if (response.ok && data.success) {
        console.log("✅ [EMAIL TEST] Email sent successfully!");
        setMessage(`✅ SUCCESS!\n\nTest email sent to: ${data.to}\n\nStatus: ${response.status}`);
        setMessageType("success");
      } else {
        console.error("❌ [EMAIL TEST] Backend returned error:", data);
        setMessage(`❌ BACKEND ERROR\n\nMessage: ${data.message || data.error}\n\nStatus: ${response.status}`);
        setMessageType("error");
      }
    } catch (error) {
      console.error("❌ [EMAIL TEST] Fetch failed:", error);
      
      if (error.name === "AbortError") {
        setMessage("❌ TIMEOUT ERROR\n\nBackend took too long to respond (>10s)\n\nIs backend running on port 5001?");
      } else if (error instanceof TypeError) {
        setMessage("❌ NETWORK ERROR\n\nCannot connect to backend\n\nMake sure backend is running:\ncd /Users/sanjeevyadav/Desktop/PrepX/backend\nnpm start");
      } else {
        setMessage(`❌ ERROR\n\n${error.message}`);
      }
      
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "40px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{ 
        maxWidth: "500px", 
        width: "100%",
        background: "white",
        borderRadius: "12px",
        padding: "40px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.2)"
      }}>
        
        <h1 style={{ 
          textAlign: "center", 
          color: "#667eea", 
          fontSize: "28px",
          margin: "0 0 10px 0"
        }}>
          📧 Email Test
        </h1>

        <p style={{ 
          textAlign: "center", 
          color: "#666", 
          fontSize: "14px",
          marginBottom: "30px"
        }}>
          Test email configuration by sending a test email
        </p>

        <button
          onClick={handleTestEmail}
          disabled={loading}
          style={{ 
            width: "100%",
            padding: "14px",
            background: "#667eea",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "bold",
            fontSize: "16px",
            opacity: loading ? 0.6 : 1,
            marginBottom: "20px",
            transition: "all 0.3s"
          }}
        >
          {loading ? "⏳ Sending..." : "📧 Send Test Email"}
        </button>

        {message && (
          <div style={{
            padding: "15px",
            background: messageType === "success" ? "#d4edda" : "#f8d7da",
            color: messageType === "success" ? "#155724" : "#721c24",
            borderRadius: "8px",
            marginBottom: "20px",
            border: messageType === "success" ? "2px solid #4caf50" : "2px solid #dc3545",
            fontWeight: "600",
            fontSize: "13px",
            lineHeight: "1.6",
            whiteSpace: "pre-wrap",
            animation: "slideIn 0.3s ease-in"
          }}>
            {message}
          </div>
        )}

        {responseData && (
          <div style={{
            padding: "15px",
            background: "#e3f2fd",
            borderRadius: "8px",
            border: "2px solid #2196f3",
            marginBottom: "20px"
          }}>
            <h3 style={{ margin: "0 0 10px 0", color: "#1565c0", fontSize: "14px", fontWeight: "bold" }}>
              📦 Full Response:
            </h3>
            <pre style={{
              background: "white",
              padding: "10px",
              borderRadius: "6px",
              overflow: "auto",
              fontSize: "11px",
              maxHeight: "200px",
              border: "1px solid #2196f3"
            }}>
              {JSON.stringify(responseData, null, 2)}
            </pre>
          </div>
        )}

        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
