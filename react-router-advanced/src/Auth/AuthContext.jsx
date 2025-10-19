


import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // simple simulated auth persisted to localStorage
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("fakeAuthUser")) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem("fakeAuthUser", JSON.stringify(user));
  }, [user]);

  const login = (username) => setUser({ name: username || "Demo User" });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

