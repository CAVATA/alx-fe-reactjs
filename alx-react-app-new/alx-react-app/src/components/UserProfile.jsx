import React from "react";

export default function UserProfile({ name = "Anonymous", age = "N/A", bio = "" }) {
  const container = {
    border: "1px solid #e0e0e0",
    padding: "14px",
    margin: "14px 0",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
    background: "white",
    maxWidth: "600px"
  };

  return (
    <div style={container}>
      <h2 style={{ color: "#1e90ff", margin: "0 0 8px", fontSize: "1.25rem" }}>{name}</h2>
      <p style={{ margin: "4px 0" }}>
        Age: <span style={{ fontWeight: 700 }}>{age}</span>
      </p>
      <p style={{ margin: "6px 0 0", color: "#333" }}>Bio: {bio}</p>
    </div>
  );
}
