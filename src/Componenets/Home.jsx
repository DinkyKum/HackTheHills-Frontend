import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Features from './Features'
import AdminDashboard from './AdminDashboard'
import ContactUs from './ContactUs'
import ThemeProvider from './ThemeProvider'

const Home = () => {
  return (
    <div>
      <ThemeProvider>
        <HeroSection/>
        </ThemeProvider>
        <Features/>
        <About/>
        <ContactUs/>

    </div>
  )
}

export default Home