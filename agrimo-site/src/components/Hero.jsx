import React from 'react'
import './Hero.css'
import ArrowIcon from '../components/icons/ArrowIcon'

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='believe-in-quality-container fade-in'>
        <p>BELIEVE IN QUALITY!</p>
      </div>

      <div className='hero-main-text slide-up'>
        Quality Trust : <br />Direct to The Farm
      </div>

      <div className='hero-line-container fade-in'>
        <hr className='hero-line' />
      </div>

      <div className='hero-sub-text-container fade-in'>
        <p className='hero-sub-text'>
          We all need a little space to grow. Give yourself the space you need to find the inner you.
        </p>
      </div>

      <div className='hero-btn-container slide-up'>
        <button className='hero-btn'>
          <span><p>Contact Us</p></span>
          <span><ArrowIcon direction='top-left' color='#333333' /></span>
        </button>
      </div>
    </section>
  )
}

export default Hero
