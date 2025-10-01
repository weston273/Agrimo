import React from 'react'
import Navbar from '../../components/Navbar'
import HeroImage from './../../assets/images/background-image.png'
import './NavHero.css'
import Hero from './../../components/Hero'

const NavHero = () => {
  return (
    <> 
    <div className='NavHeroContainer'>
      {/* <img src = {HeroImage} className='HeroImage' alt='Hero Background Image' /> */}
      <span className='NavbarSpan'>
        <Navbar />
      </span>
      <div className='HeroContainer'>
        <Hero />
      </div>
      
      
    </div>
        
    </>
  )
}

export default NavHero