// src/services/github.js
import axios from 'axios';

const token = import.meta.env.VITE_APP_GITHUB_API_KEY || null;

// Note: using a secret token directly in client code exposes it to users.
// For public apps, prefer a server-side proxy or backend.
const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: token ? { Authorization: `token ${token}` } : {}
});

export async function searchUsers(q) {
  if (!q) return [];
  const res = await api.get('/search/users', { params: { q } });
  return res.data.items || [];
}
