import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-card">
        {/* Hero Background Image loaded from public folder */}
        <img 
          src="/hero.jpg" 
          alt="FAYWALK Signatures Streetwear Collection" 
          className="hero-bg-img"
        />

        {/* Subtle Dark/Gradient Overlay for Content Readability */}
        <div className="hero-overlay"></div>

        {/* Main Banner Content */}
        <div className="hero-content">
          <div className="hero-badge">
            YEAR-END SALE
          </div>

          <h1 className="hero-title">
            FAYWALK<br />
            SIGNATURES 25% OFF
          </h1>

          <p className="hero-subtitle">
            Redefine your look with 25% off for all FAYWALK Signatures outfit
          </p>

          <a href="#shop" className="hero-cta">
            <span>Explore</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
