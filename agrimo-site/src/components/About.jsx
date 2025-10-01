import React from 'react'
import './About.css'
import WhoWeAreImage from './../assets/images/Background.png'
import LeafIcon from './../assets/images/leaf-icon.png'
import FeatureCard from './cards/FeatureCard'
import EquipmentIcon from './../assets/images/equipment-icon.png'
import FenceIcon from './../assets/images/fence-icon.png'


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
              <p>
                Currently we are growing <br/>
                and selling organic food
              </p>
            </div>

            <div className='who-we-are-sub-text'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br></br> Maiores quidem maxime modi in doloribus voluptatem quam beatae <br></br>tempore accusantium est!  Vitae laboriosam dolore, sequi facere<br></br> autem odit tenetur sed eveniet?
              </p>
            </div>

            <div className='card-container'>
              <FeatureCard 
                icon={<img src={FenceIcon}/>}
              title="Eco Farms Worldwide"
              description="There are many variations of passages of lorem ipsum available majority have suffered."
              />

              <FeatureCard 
                icon={<img src={EquipmentIcon}/>}
              title="Special Equipment"
              description="There are many variations of passages of lorem ipsum available majority have suffered."
              />
              
            </div>

              
          </div>
        </div>


      </section>
    </>
  )
}

export default About