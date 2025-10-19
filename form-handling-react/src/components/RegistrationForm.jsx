
import React, { useState } from "react";

/**
 * Controlled Registration Form
 * - uses useState
 * - explicit value bindings for username, email, password
 * - basic validation
 * - posts to mock API
 */

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const errs = {};
    if (!username.trim()) errs.username = "Username is required.";
    if (!email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email.";
    if (!password) errs.password = "Password is required.";
    else if (password.length < 6) errs.password = "Password must be at least 6 characters.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
      });
      if (!res.ok) throw new Error("Network response not ok");
      const data = await res.json();
      setStatus("Registration successful (mock). Response id: " + data.id);
      // reset fields
      setUsername("");
      setEmail("");
      setPassword("");
      setErrors({});
    } catch (err) {
      setStatus("Registration failed. " + err.message);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "0 auto" }}>
      <h2>Controlled Registration Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", fontWeight: 600 }}>Username</label>
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            style={{ width: "100%", padding: 8 }}
          />
          {errors.username && <div style={{ color: "red", marginTop: 4 }}>{errors.username}</div>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", fontWeight: 600 }}>Email</label>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{ width: "100%", padding: 8 }}
          />
          {errors.email && <div style={{ color: "red", marginTop: 4 }}>{errors.email}</div>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", fontWeight: 600 }}>Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            style={{ width: "100%", padding: 8 }}
          />
          {errors.password && <div style={{ color: "red", marginTop: 4 }}>{errors.password}</div>}
        </div>

        <button type="submit" style={{ padding: "8px 16px" }}>Register</button>
      </form>

      {status && <div style={{ marginTop: 12, fontWeight: 600 }}>{status}</div>}
    </div>
  );
};

export default RegistrationForm;

