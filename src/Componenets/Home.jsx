import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Features from './Features'
import AdminDashboard from './AdminDashboard'
import ContactUs from './ContactUs'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Features/>
        <About/>
        <ContactUs/>

    </div>
  )
}

export default Home