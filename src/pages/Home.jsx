import React from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import NewArrival from '../components/NewArrival'
import BrandFeature from '../components/BrandFeature'
import Category from '../components/Category'
import VideoBanner from '../components/VideoBanner'
import ShopWithConfidence from '../components/ShopWithConfidence'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <TopBar />
      <Header />
      <main className="main-content">
        <Hero />
        <NewArrival />
        <BrandFeature />
        <Category />
        <VideoBanner />
        <ShopWithConfidence />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
