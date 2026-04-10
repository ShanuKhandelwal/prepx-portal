


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../services/authService";
import { useAuth } from "../auth/AuthProvider";

export default function RegistrationPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [saving, setSaving] = useState(false);

  const registerCandidate = async () => {
    // No validation (as per your requirement)
    try {
      setSaving(true);
      await authService.registerCandidate(user.uid, name, dob);
      navigate("/services");
    } catch (e) {
      console.error(e);
      alert("Failed to register: " + e.message);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="app-page">
      <div className="topbar">
        <button className="btn btn-outline btn-sm" onClick={() => navigate("/login")}>← Back</button>
        <span className="badge">{user?.email}</span>
        <button className="btn btn-outline btn-sm" onClick={handleLogout}>Logout</button>
      </div>      <div className="panel">
        <h2>Candidate Registration</h2>
        <p className="subtitle">Enter candidate details to continue.</p>

        <div className="form">
          <div className="field">
            <div className="label">Candidate name</div>
            <input
              className="input"
              value={name}
              placeholder="Candidate name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="field">
            <div className="label">Date of birth</div>
            <input
              className="input"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" onClick={registerCandidate} disabled={saving}>
            {saving ? "Saving..." : "Register & Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
``
