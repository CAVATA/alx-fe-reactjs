import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <div>
      <header style={{padding:16, borderBottom:'1px solid #eee', display:'flex', justifyContent:'space-between'}}>
        <h1 style={{margin:0}}>GitHub User Search</h1>
        <nav>
          <Link to="/">Home</Link>{' '}|{' '}
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main style={{padding:16}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={
            <section>
              <h2>About</h2>
              <p>Search GitHub users by username and open their profiles.</p>
            </section>
          } />
        </Routes>
      </main>
    </div>
  )
}
