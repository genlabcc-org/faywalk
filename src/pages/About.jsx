import React from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <TopBar />
      <Header />
      <main className="about-main">
        <section className="about-hero">
          <h1>About FAYWALK</h1>
          <p>Redefining modern fashion and streetwear.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
