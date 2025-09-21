import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 12 }}>
      <input
        type="search"
        placeholder="Search GitHub users (e.g. torvalds)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: 8, width: 320 }}
      />
      <button type="submit" style={{ marginLeft: 8, padding: "8px 12px" }}>
        Search
      </button>
    </form>
  );
}
