import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Testimonials.css'

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: '"Great everyday essentials with a premium feel. I\'ve already ordered again."',
      name: 'By Liam',
      image: '/55.jpg',
      rating: 5
    },
    {
      id: 2,
      quote: '"Simple designs, great comfort, and fast delivery. Exactly what I was looking for."',
      name: 'By Ethan',
      image: '/product2.avif',
      rating: 5
    },
    {
      id: 3,
      quote: '"Clean styles that work anywhere. The quality and attention to detail stand out."',
      name: 'By Noah',
      image: '/82.jpg',
      rating: 5
    },
    {
      id: 4,
      quote: '"The quality exceeded my expectations. Every piece feels premium and fits perfectly."',
      name: 'By Olivia',
      image: '/product3.avif',
      rating: 5
    },
    {
      id: 5,
      quote: '"The fabric feels amazing and is effortless. I wear it every week."',
      name: 'By Sophia',
      image: '/product1.avif',
      rating: 5
    }
  ]

  // Duplicate items array for seamless GSAP infinite loop
  const duplicatedReviews = [...reviews, ...reviews]

  const trackRef = useRef(null)
  const tweenRef = useRef(null)

  useEffect(() => {
    if (!trackRef.current) return

    // Create GSAP smooth linear continuous infinite slide
    tweenRef.current = gsap.to(trackRef.current, {
      xPercent: -50,
      ease: 'none',
      duration: 25,
      repeat: -1
    })

    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill()
      }
    }
  }, [])

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-title">Style loved by Thousands</h2>
        <p className="testimonials-subtitle">
          See why customers keep coming back for timeless style, premium comfort, and everyday confidence.
        </p>
      </div>

      <div className="testimonials-carousel-wrapper">
        <div className="testimonials-track" ref={trackRef}>
          {duplicatedReviews.map((review, idx) => (
            <div key={`${review.id}-${idx}`} className="testimonial-card">
              <img src={review.image} alt={review.name} className="testimonial-bg-img" />
              <div className="testimonial-overlay"></div>
              <div className="testimonial-content">
                <p className="testimonial-quote">{review.quote}</p>
                <div className="testimonial-footer">
                  <span className="testimonial-author">{review.name}</span>
                  <div className="testimonial-stars">
                    {'★'.repeat(review.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
