import React from 'react'
import './Button.css'

export default function Button({ 
  children, 
  text, 
  href, 
  onClick, 
  type = 'button', 
  className = '',
  icon
}) {
  const content = children || text

  const defaultArrow = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  )

  const arrowIcon = icon !== undefined ? icon : defaultArrow

  if (href) {
    return (
      <a href={href} className={`faywalk-btn ${className}`}>
        <span className="faywalk-btn-left">{content}</span>
        <span className="faywalk-btn-red">{arrowIcon}</span>
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`faywalk-btn ${className}`}>
      <span className="faywalk-btn-left">{content}</span>
      <span className="faywalk-btn-red">{arrowIcon}</span>
    </button>
  )
}
