// src/services/githubService.js
import axios from 'axios';

const token = import.meta.env.VITE_APP_GITHUB_API_KEY || null;
const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: token ? { Authorization: `token ${token}` } : {},
});

/**
 * Fetch GitHub user data for a single username.
 * Throws an error if not found or other network issue.
 * Function name: fetchUserData
 */
export async function fetchUserData(username) {
  if (!username) throw new Error('username required');

  try {
    const res = await api.get(`/users/${encodeURIComponent(username)}`);
    return res.data; // full user object
  } catch (err) {
    // normalize 404 so caller can show "not found"
    if (err.response && err.response.status === 404) {
      const e = new Error('Not Found');
      e.code = 404;
      throw e;
    }
    throw err;
  }
}
