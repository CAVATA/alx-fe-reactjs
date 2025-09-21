import axios from 'axios'

const BASE = 'https://api.github.com'
const token = import.meta.env.VITE_APP_GITHUB_API_KEY // optional token for higher rate limits
const headers = token ? { Authorization: `token ${token}` } : {}

export async function searchUsers(query, per_page = 20) {
  const res = await axios.get(`${BASE}/search/users`, {
    headers,
    params: { q: query, per_page }
  })
  return res.data.items
}
