import React from 'react'
import './About.css'
import FarmerGirl from './../assets/images/farmer-girl.jpg'
import LeafIcon from './../assets/images/leaf-icon.png'
import Card2 from './cards/Card2'
import EquipmentIcon from './../assets/images/equipment-icon.png'
import FenceIcon from './../assets/images/fence-icon.png'
import StarIcon from './../assets/images/star-icon.png'


const About = () => {
  return (
    <>
      <section className='WhoWeAreSection'>
  <div className='who-we-are-wrapper'>
    
    {/* LEFT - IMAGE */}
    <div className='who-we-are-image-container'>
      <img src={FarmerGirl} alt="Who We Are" className='who-we-are-image' />
    <div className='who-we-are-card-container'>
      <div className='who-we-are-card'>
        <img src={StarIcon} alt="Star Icon" className='star-icon' />
        <div className='who-we-are-card-text'>
          <h2>435+</h2>
          <p>Growth Tons of Harvest</p>
        </div>
      </div>
    </div>
      
    </div>

    {/* RIGHT - TEXT */}
    <div className='who-we-are-content'>
      <div className='who-we-are-header'>
        <img src={LeafIcon} alt="Leaf Icon" className='leaf-icon' />
        <span>Who We Are</span>
      </div>

      <h1 className='who-we-are-title'>
        Currently we are growing <br /> and selling organic food
      </h1>

      <p className='who-we-are-description'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour or randomized words without look even.
      </p>

      <div className='who-we-are-features'>
        <Card2
          card2Image={FenceIcon}
          card2Header="Eco Farms Worldwide"
          card2Text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered." />
        <Card2
          card2Image={EquipmentIcon}
          card2Header="Special Equipment"
          card2Text="Signs of farm growth available, majority have suffered."
        />
      </div>
    </div>

  </div>
</section>

    </>
  )
}

export default About