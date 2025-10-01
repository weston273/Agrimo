import React from 'react'
import './Hero.css'
import ArrowIcon from '../components/icons/ArrowIcon'


const Hero = () => {
  return (
    <>
      <section className='hero-section'>

        <div className='believe-in-quality-container'>
          <p>BELIEVE IN QUALITY!</p>
        </div>
        <div className='hero-main-text'>
          Quality Trust : <br></br>Direct to The Farm
        </div>
        {/* The line which seperates the main hero text and the p text */}
        <div className='hero-line-container'>
          <hr className='hero-line'/>
        </div>
        
        {/* p sub tag */}
        <div className='hero-sub-text-container'>
          <p className='hero-sub-text'>
            We all need a little space to grow. Give yourself the space you need to find the inner you.
          </p>
        </div>

        {/* button */}
        <div className='hero-btn-container'>
          <button className='hero-btn'>
            <span><p>Contact Us</p></span>
            <span><ArrowIcon direction='top-left' color='#333333' /></span>
          </button>
        </div>

      </section>
    </>
  )
}

export default Hero