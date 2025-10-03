import React from 'react'
import './Services.css'
import WhoWeAreSection from './above-title/WhoWeAreSection' 
import LeafIcon from '../assets/images/leaf-icon.png'
import Btn1 from '../components/Buttons/Btn1'
import BtnArrowIcon from './icons/BtnArrowIcon'
import Card from './cards/Card'
import Truck from './../assets/images/trucktor.png'
import Farmer from './../assets/images/farmer.png'
import Trucktor2 from './../assets/images/trucktor-2.png'
import Farmerr from './../assets/images/farmerr.png'

const Services = () => {
  return (
    <>
      <section className='servicesSection'>

        {/* The Who We are Icon ike thingy */}
        <div className='services-header-icon'>
          <WhoWeAreSection icon={LeafIcon} alt={`Our Services`} title={`Our Services`} />
        </div>
        {/* The header Text */}

        <div className='services-header-text'>

          <div className='services-header-main-text-container'>
            <p className='services-header-main-text'>Best Agricultural Services</p>
          </div>

          {/* the  left and right buttons */}
          <div className='services-header-btns'>
            <div className='services-header-btns-left'>
              <Btn1 
              Icon={<BtnArrowIcon direction='right' color='white' size='20' />}
            />
            </div>
            <div className='services-header-btns-right'>
              <Btn1 
              Icon={<BtnArrowIcon direction='left' color='white' size='20' />}
            />
            </div>
            
          </div>
        </div>
        
        {/* The cards  */}

        <div className='services-cards-container'>
          <div className='services-card'>
            <Card cardImage={Truck} cardTitleText='Fertilizer' cardHeader='Harvest Concepts' cardText={
              <>
              Farming and animal husbandry and<br /> discuss with farmers and scientists.
              </>
              }/>
          </div>
          
          <div className='services-card'>
            <Card cardImage={Trucktor2} cardTitleText='Fruits' cardHeader='Farming Products' cardText={
              <>
              Farming and animal husbandry and<br /> discuss with farmers and scientists.
              </>
              }/>
          </div>

          <div className='services-card'>
            <Card cardImage={Farmerr} cardTitleText='Fertilizer' cardHeader='Soil fertilization' cardText={
              <>
              Farming and animal husbandry and<br /> discuss with farmers and scientists.
              </>
              }/>
          </div>
          
        </div>

      </section>
    </>
  )
}

export default Services