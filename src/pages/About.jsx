import React, { useEffect, useRef, useState } from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './About.css'

function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}

function RevealImage({ src, alt, className = '' }) {
  const [ref, isVisible] = useInView({ threshold: 0.15 })

  return (
    <div ref={ref} className={`reveal-image ${isVisible ? 'is-visible' : ''} ${className}`}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default function About() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // hook this up to your newsletter provider (Mailchimp, Klaviyo, etc.)
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <div className="about-page">
      <TopBar />
      <Header />
      <main className="about-main">
        <section className="about-hero">
          <h1>About FAYWALK</h1>
          <p>Redefining modern fashion and streetwear.</p>
        </section>

        <section className="about-hero-image">
          <RevealImage
            src="https://framerusercontent.com/images/txL7ooMH1O483QXsBS64f1CiI.jpg?width=4080&height=1221"
            alt="FAYWALK streetwear collection"
          />
        </section>

        <section className="about-statement">
          <h2>Bold. Unapologetic. Yours.</h2>
          <p>
            At FAYWALK, every thread carries a legacy built since 1934. We blend decades of experience with a forward-looking vision, creating with the values, dedication, and resilience that have shaped our journey.

          </p>
        </section>

        <section className="about-feature">
          <div className="about-feature-image">
            <RevealImage
              src="https://framerusercontent.com/images/2gSTCxZllphpt0CBrVtZpVpK9k.jpg?width=2004&height=1326"
              alt="FAYWALK garment detail"
            />
          </div>
          <div className="about-feature-text">
            <h2>Made with intention, built to last</h2>
            <p>
              Every FAYWALK piece is checked by hand before it ships — the fabric, the
              stitching, the fit. We'd rather ship fewer drops and get them right than
              chase a trend we can't stand behind a year from now.
            </p>
          </div>
        </section>

        <section className="about-feature">
          <div className="about-feature-text">
            <h2>Driven by innovation, inspired by you</h2>
            <p>
              Everything we make starts with how you actually move through your day.
              FAYWALK pushes on fabric, fit, and finish so the pieces keep up — built
              for a future where style never gets in the way of function.
            </p>
          </div>
          <div className="about-feature-image">
            <RevealImage
              src="https://framerusercontent.com/images/fcluvvbQNHEYQmMgXKyN1701vNI.jpg?width=2004&height=1326"
              alt="FAYWALK model portrait"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}