import React from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <TopBar />
      <Header />
      <main className="main-content">
        <Hero />
      </main>
    </div>
  )
}
