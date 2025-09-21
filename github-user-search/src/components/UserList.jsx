import React from "react";

export default function UserList({ users = [] }) {
  if (!users || users.length === 0) return <p>No users to show.</p>;

  return (
    <div>
      <h2>Results</h2>
      <div style={{ display: "grid", gap: 12 }}>
        {users.map((u) => (
          <div key={u.id} style={{ border: "1px solid #ddd", padding: 12, display: "flex", alignItems: "center" }}>
            <img src={u.avatar_url} alt={u.login} width={64} height={64} style={{ borderRadius: 6, marginRight: 12 }} />
            <div>
              <a href={u.html_url} target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
                {u.login}
              </a>
              <div style={{ marginTop: 6 }}>
                <small>ID: {u.id}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
