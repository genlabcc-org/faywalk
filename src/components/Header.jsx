import React, { useState } from 'react'
import './Header.css'

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <a href="#home">
            <img src="/faywalklogo.png" alt="FAYWALK" className="logo-img" />
          </a>
        </div>

        <nav className="nav-menu">
          <a href="#new-arrival" className="nav-link">NEW ARRIVAL</a>
          <a href="#mens" className="nav-link">MENS</a>
          <a href="#womens" className="nav-link">WOMENS</a>
          <a href="#about" className="nav-link">ABOUT US</a>
          
          <span className="divider">|</span>

          <div className="search-wrapper">
            <button 
              className="search-btn" 
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
                placeholder="Search products..." 
                className="search-input"
                autoFocus 
              />
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
