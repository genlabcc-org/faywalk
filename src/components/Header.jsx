import React, { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-container">
        {/* Left: Brand Logo */}
        <div className="header-left">
          <a href="#home" className="logo-link">
            <img src="/faywalklogo.svg" alt="FAYWALK" className="logo-img" />
          </a>
        </div>

        {/* Center: Navigation Menus */}
        <nav className="header-center nav-menu">
          <a href="#new-arrival" className="nav-link">NEW ARRIVAL</a>
          <a href="#mens" className="nav-link">MENS</a>
          <a href="#womens" className="nav-link">WOMENS</a>
          <a href="#about" className="nav-link">ABOUT US</a>
        </nav>

        {/* Right: Actions (Search, Profile, Shopping Bag) */}
        <div className="header-right header-actions">
          {/* Search Icon */}
          <div className="search-wrapper">
            <button 
              className="icon-btn search-btn" 
              aria-label="Search"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            {searchOpen && (
              <input 
                type="text" 
                placeholder="Search..." 
                className="search-input"
                autoFocus 
              />
            )}
          </div>

          {/* Profile Icon */}
          <a href="#profile" className="icon-btn profile-btn" aria-label="Account Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>

          {/* Shopping Bag Icon */}
          <a href="#cart" className="icon-btn bag-btn" aria-label="Shopping Bag">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
