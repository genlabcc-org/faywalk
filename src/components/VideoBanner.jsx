import React from 'react'
import Button from './Button'
import './VideoBanner.css'

export default function VideoBanner() {
  return (
    <section className="video-banner-section">
      <div className="video-banner-container">
        <video 
          className="video-banner-element"
          src="/video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
        />

        {/* Overlay gradient for legibility */}
        <div className="video-banner-overlay"></div>

        {/* Text & Signature Button Overlay Inside Video */}
        <div className="video-banner-content">
          <h2 className="video-banner-title">
            FAYWALK CAMPAIGN 2026
          </h2>
          <p className="video-banner-subtitle">
            Experience signature style and uncompromised quality in every piece.
          </p>
          <Button href="#shop">
            Explore Collection
          </Button>
        </div>
      </div>
    </section>
  )
}
