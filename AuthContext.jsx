import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "./api/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setInitialLoading(false);
      return;
    }
    getCurrentUser()
      .then((u) => {
        setUser(u);
      })
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => setInitialLoading(false));
  }, []);

  const value = {
    user,
    setUser,
    initialLoading,
    isAuthenticated: !!user,
    hasRole: (roles) => (user ? roles.includes(user.role) : false),
    logout: () => {
      localStorage.removeItem("token");
      setUser(null);
      window.location.href = "/login";
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
