
import { useState } from "react";
import * as authService from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await authService.login(email, password);
      nav("/register");
    } catch (err) {
      console.error("Login error:", err);
      alert(`Login failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

 
return (
  <div className="login-bg">
    <div className="login-card">
      {/* Logo Area */}
      <div className="login-logo">
        <div className="login-logo-box">
          <div>
            <span>THE</span>
            PrepX
            <span>COMPANY</span>
          </div>
        </div>
      </div>

      <div className="login-title">Login to Access the Site</div>

      <div className="login-welcome">Welcome to PrepX</div>

      <form className="login-form" onSubmit={onLogin}>
        <div className="field">
          <label className="label">Username / Email</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div className="field">
          <label className="label">Password</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <button className="login-btn" disabled={loading} type="submit">
          {loading ? "LOGGING IN..." : "LOGIN"}
        </button>

        <div className="login-bottom">
          Don’t have an account?{" "}
          <Link className="login-link" to="/signup">
            Create account
          </Link>
        </div>
      </form>
    </div>
  </div>
);
}