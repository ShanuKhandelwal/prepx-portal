
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as authService from "../services/authService";

export default function PrivateRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    (async () => {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser || null);
    })();
  }, []);

  if (user === undefined) return <div style={{ padding: 20 }}>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
}
