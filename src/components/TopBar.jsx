import React from 'react'
import './TopBar.css'

export default function TopBar() {
  const tickerSequence = [
    { type: 'logo' },
    { type: 'text', text: '+91 462 232 2986', href: 'tel:+914622322986' },
    { type: 'text', text: 'info@seyadgroup.com', href: 'mailto:info@seyadgroup.com' },
    { type: 'text', text: 'Mon – Sat: 9:00am – 7:00pm', href: 'https://seyadgroup.com/about-us/#' },
    { type: 'text', text: 'BLACK FRIDAY SALE 50% OFF', href: '#shop' }
  ]

  // Quadruple the array for continuous smooth looping
  const items = [...tickerSequence, ...tickerSequence, ...tickerSequence, ...tickerSequence]

  return (
    <div className="topbar">
      <div className="topbar-track">
        {items.map((item, idx) => (
          <span key={idx} className="topbar-item">
            <span className="star">✦</span>
            {item.type === 'logo' ? (
              <img src="/faywalklogo.png" alt="FAYWALK" className="topbar-logo" />
            ) : item.href ? (
              <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="topbar-link">
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
