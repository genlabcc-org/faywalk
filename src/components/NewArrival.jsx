import React, { useState } from 'react'
import Button from './Button'
import './NewArrival.css'

export default function NewArrival() {
  const products = [
    {
      id: 1,
      title: 'Block Zipper Hoodie',
      price: '₹2,499',
      originalPrice: '₹3,499',
      image: '/product1.avif',
      hoverImage: '/product11.avif'
    },
    {
      id: 2,
      title: 'Oversized Block T-Shirt',
      price: '₹1,999',
      originalPrice: '₹2,999',
      image: '/product2.avif',
      hoverImage: '/product22.avif'
    },
    {
      id: 3,
      title: 'Long T-shirt',
      price: '₹1,499',
      originalPrice: '₹1,999',
      image: '/product3.avif',
      hoverImage: '/product33.avif'
    }
  ]

  const [activeImages, setActiveImages] = useState(
    products.reduce((acc, p) => ({ ...acc, [p.id]: p.image }), {})
  )

  const handleMouseEnter = (id, hoverImg) => {
    setActiveImages((prev) => ({ ...prev, [id]: hoverImg }))
  }

  const handleMouseLeave = (id, origImg) => {
    setActiveImages((prev) => ({ ...prev, [id]: origImg }))
  }

  return (
    <section className="new-arrival-section" id="new-arrival">
      {/* Section Header */}
      <div className="new-arrival-header">
        <h2 className="new-arrival-title">NEW ARRIVAL</h2>
        <div className="new-arrival-line"></div>
        <Button href="#shop" className="browse-all-btn">
          Browse All
        </Button>
      </div>

      {/* Product Cards Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onMouseEnter={() => handleMouseEnter(product.id, product.hoverImage)}
            onMouseLeave={() => handleMouseLeave(product.id, product.image)}
          >
            <div className="product-image-box">
              <img
                src={activeImages[product.id] || product.image}
                alt={product.title}
                className="product-img"
              />
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <div className="product-price-box">
                <span className="product-price">{product.price}</span>
                <span className="product-original-price">{product.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
