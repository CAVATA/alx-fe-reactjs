
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { user, login, logout } = useAuth();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(name || "Demo User");
    navigate("/profile", { replace: true });
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>Login</h1>
      {user ? (
        <>
          <p>Already logged in as <strong>{user.name}</strong></p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 8 }}>
            <label>Username: </label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter a name" />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

