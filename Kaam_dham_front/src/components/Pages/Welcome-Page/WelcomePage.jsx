// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from '../../Navbar/Navbar'
import Hero from '../../Hero/Hero'
import Cards from '../../Cards/Cards'
import InfoSection from '../../InfoSection/InfoSection'
import Footer from '../../Footer/Footer'
import './WelcomePage.css';

function WelcomePage() {
  return (
    <div>
      <NavBar />
      <Hero/>
      <Cards/>
      <InfoSection/>
      <Footer/>
    </div>
  )
}

export default WelcomePage
