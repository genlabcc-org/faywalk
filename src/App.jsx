import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [route, setRoute] = useState(window.location.hash || '#home')

  useEffect(() => {
    // Initialize Lenis for buttery smooth global scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    })

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    const updateLenis = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateLenis)
    gsap.ticker.lagSmoothing(0)

    const handleHashChange = () => {
      const currentHash = window.location.hash || '#home'
      setRoute(currentHash)
      lenis.scrollTo(0, { immediate: true })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      gsap.ticker.remove(updateLenis)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app">
      {route === '#about' ? <About /> : <Home />}
    </div>
  )
}

export default App
