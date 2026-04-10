
import { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (stored in localStorage)
    (async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
      } catch (err) {
        console.error("Error getting current user:", err);
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    })();
  }, []);

  const login = async (email, password) => {
    const userData = await authService.login(email, password);
    setUser(userData);
    return userData;
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, authLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
