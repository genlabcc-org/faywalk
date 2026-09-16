import React from 'react'
import './Category.css'

export default function Category() {
  const categories = [
    {
      id: 'mens',
      title: 'MENS',
      subtitle: 'COLLECTION',
      image: '/product1.avif',
      link: '#mens'
    },
    {
      id: 'womens',
      title: 'WOMENS',
      subtitle: 'COLLECTION',
      image: '/product2.avif',
      link: '#womens'
    }
  ]

  return (
    <section className="category-section">
      <div className="category-grid">
        {categories.map((cat) => (
          <a key={cat.id} href={cat.link} className="category-card">
            <div className="category-image-wrapper">
              <img src={cat.image} alt={`${cat.title} Collection`} className="category-img" />
            </div>
            <div className="category-overlay-text">
              <h2 className="category-title">{cat.title}</h2>
              <span className="category-subtitle">{cat.subtitle}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
