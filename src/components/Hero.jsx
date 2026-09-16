import React from 'react'
import Button from './Button'
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
          <h1 className="hero-title">
            FAYWALK<br />
            SIGNATURES 25% OFF
          </h1>

          <p className="hero-subtitle">
            Redefine your look with 25% off for all FAYWALK Signatures outfit
          </p>

          <Button href="#shop">
            Explore
          </Button>
        </div>
      </div>
    </section>
  )
}
