import React from 'react'
import './ShopWithConfidence.css'

export default function ShopWithConfidence() {
  const features = [
    {
      id: 1,
      title: 'Worldwide Shipping',
      description: 'Fast & reliable delivery to over 100 countries worldwide.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Sustainable Cloths',
      description: 'Made from responsibly sourced materials with less impact.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 6-4.5 11-10 11z"></path>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Free 30 Days Returns',
      description: 'Not satisfied? Return within 30 days for a full refund.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 14 4 9 9 4"></polyline>
          <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Secure Payments',
      description: 'Shop safely with encrypted checkout and major options.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      )
    }
  ]

  return (
    <section className="shop-confidence-section">
      <div className="shop-confidence-card">
        <h2 className="shop-confidence-heading">Shop With Confidence</h2>
        
        <div className="shop-confidence-grid">
          {features.map((feature, idx) => (
            <div key={feature.id} className={`confidence-col ${idx < features.length - 1 ? 'has-divider' : ''}`}>
              <div className="confidence-icon-box">{feature.icon}</div>
              <h3 className="confidence-title">{feature.title}</h3>
              <p className="confidence-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
