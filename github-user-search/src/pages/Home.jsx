import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import UserCard from '../components/UserCard'
import { searchUsers } from '../services/githubService'

export default function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (query) => {
    setLoading(true)
    setError(null)
    try {
      const results = await searchUsers(query)
      setUsers(results || [])
    } catch (err) {
      setError(err?.message || 'Failed to fetch users')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 12,
        marginTop: 12
      }}>
        {users.map(u => <UserCard key={u.id} user={u} />)}
      </div>
    </div>
  )
}
