import { useState, useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App() {
  const [route, setRoute] = useState(window.location.hash || '#home')

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash || '#home'
      setRoute(currentHash)
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="app">
      {route === '#about' ? <About /> : <Home />}
    </div>
  )
}

export default App
