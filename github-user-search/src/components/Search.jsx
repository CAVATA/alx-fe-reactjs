// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

export default function Search() {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = query.trim();
    if (!username) return;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      // If the service throws with code 404, show friendly not found message
      if (err.code === 404 || (err.response && err.response.status === 404)) {
        setError("Looks like we cant find the user");
      } else {
        setError('An error occurred. Please try again later.');
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 760 }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Enter GitHub username (e.g. torvalds)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: 8, width: 320 }}
          aria-label="GitHub username"
        />
        <button type="submit" style={{ marginLeft: 8, padding: '8px 12px' }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', border: '1px solid #eee', padding: 12 }}>
          <img src={user.avatar_url} alt={user.login} width={100} height={100} style={{ borderRadius: 8 }} />
          <div>
            <h2 style={{ margin: 0 }}>{user.name || user.login}</h2>
            <p style={{ margin: '6px 0' }}>{user.bio}</p>
            <p style={{ margin: '6px 0' }}>
              <a href={user.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
            </p>
            <p style={{ margin: '6px 0', fontSize: 14, color: '#555' }}>
              {user.public_repos} repos • {user.followers} followers • {user.following} following
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
