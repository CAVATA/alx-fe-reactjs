import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import { searchUsers } from "./services/github";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(query) {
    if (!query) {
      setUsers([]);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const results = await searchUsers(query);
      setUsers(results);
    } catch (err) {
      setError(err.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading…</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <UserList users={users} />
    </div>
  );
}
