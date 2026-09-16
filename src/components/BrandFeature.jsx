import React from 'react'
import './BrandFeature.css'

export default function BrandFeature() {
  return (
    <section className="brand-feature-section">
      <div className="brand-feature-container">
        {/* Left Side: Crisp SVG Logo */}
        <div className="brand-feature-left">
          <img 
            src="/faywalklogo.svg" 
            alt="FAYWALK" 
            className="brand-feature-logo" 
          />
        </div>

        {/* Right Side: Editorial Text */}
        <div className="brand-feature-right">
          <p className="brand-feature-text">
            Explore the newest additions to our Collection to discover clothing, shoes, bags and accessories featuring signature styles and detailing.
          </p>
        </div>
      </div>
    </section>
  )
}
