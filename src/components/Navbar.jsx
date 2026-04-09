
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as authService from "../services/authService";
import { useAuth } from "../auth/AuthProvider";

export default function NavBar() {
  const { user, logout } = useAuth();
  const [registrationId, setRegistrationId] = useState(null);

  useEffect(() => {
    if (!user) {
      setRegistrationId(null);
      return;
    }

    (async () => {
      const regId = await authService.getRegistrationId();
      setRegistrationId(regId);
    })();
  }, [user]);

  return (
    <div style={{ display: "flex", gap: 12, padding: 12, borderBottom: "1px solid #ddd" }}>
      <Link to="/register">Register</Link>

      {/* ✅ Only after candidate registered */}
      {registrationId && <Link to="/services">Services</Link>}

      <span style={{ marginLeft: "auto" }}>{user?.email}</span>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
