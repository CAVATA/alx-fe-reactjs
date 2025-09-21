export default function UserCard({ user }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: 12,
      borderRadius: 8,
      textAlign: 'center'
    }}>
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: 80, height: 80, borderRadius: '50%' }}
      />
      <h3 style={{ margin: '8px 0 4px' }}>{user.login}</h3>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View Profile
      </a>
    </div>
  )
}
