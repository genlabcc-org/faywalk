import React, { useState } from 'react'
import Button from './Button'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Thank you for subscribing with ${email}! Use code FAY15 for 15% off.`)
      setEmail('')
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-container">
          {/* Column 1: Brand Info */}
          <div className="footer-col footer-brand">
            <a href="#home" className="footer-logo-link">
              <img src="/faywalklogo.svg" alt="FAYWALK" className="footer-logo-img" />
            </a>
            <p className="footer-madeby">Made by FAYWALK</p>
            <div className="footer-copyright">
              <p>© 2026 FAYWALK</p>
              <a href="#privacy">Privacy Policy.</a>
            </div>
          </div>

          {/* Column 2: SHOPS */}
          <div className="footer-col">
            <h4 className="footer-heading">SHOPS</h4>
            <ul className="footer-links">
              <li><a href="#new-arrival">NEW ARRIVAL</a></li>
              <li><a href="#mens">MENS</a></li>
              <li><a href="#womens">WOMENS</a></li>
              <li><a href="#winter">WINTER</a></li>
            </ul>
          </div>

          {/* Column 3: BRAND */}
          <div className="footer-col">
            <h4 className="footer-heading">BRAND</h4>
            <ul className="footer-links">
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#contact">CONTACT</a></li>
              <li><a href="#blog">BLOG</a></li>
              <li><a href="#404">404</a></li>
            </ul>
          </div>

          {/* Column 4: FOLLOW US */}
          <div className="footer-col">
            <h4 className="footer-heading">FOLLOW US</h4>
            <ul className="footer-links">
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">X/TWITTER</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer">FACEBOOK</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noreferrer">TIKTOK</a></li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="footer-col footer-newsletter">
            <h3 className="newsletter-title">DON'T MISS OUT!</h3>
            <p className="newsletter-desc">
              Register for our newsletter and enjoy a 15% discount on your initial purchase!
            </p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Large Bottom Watermark */}
      <div className="footer-bottom-watermark">
        A Legacy Since 1934
      </div>
    </footer>
  )
}
