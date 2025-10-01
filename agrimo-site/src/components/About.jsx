import React from 'react'
import './About.css'
import WhoWeAreImage from './../assets/images/Background.png'
import LeafIcon from './../assets/images/leaf-icon.png'

const About = () => {
  return (
    <>
      <section className='WhoWeAreSection'>
        {/* First Part */}

        <div className='who-we-are-container-first'>
          <div className='who-we-are-image-container'>
            <img src={WhoWeAreImage} alt="Who We Are" className='who-we-are-image' />
          </div>
        </div>

        {/* Second Part */}
        <div className='who-we-are-container-second'>
          <div className='who-we-are-text-container'>
            <div className='who-we-are-header'>
              <span className='leaf-icon-container'>
                <img src={LeafIcon} alt="Leaf Icon" className='leaf-icon' />
              </span>
              <span className='who-we-are-header-text'>
                <p>Who We Are</p>
              </span>
            </div>

            <div className='who-we-are-main-text'>
              <h1>
                Currently we are growing <br/>
                and selling organic food
              </h1>
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default About