import React from 'react'
import VectorContainer from './containers/VectorContainer'
import './FeatureCards.css'
import TruckIcon from './../assets/images/truck-icon.png'

const FeatureCards = () => {
  return (
    <>
      <section className='feature-cards-section'>
        
        {/* 1 */}
        <div className='feature-cards-container'>
          <VectorContainer width={320} height={220} fill={"#fff"}>
            <div className="card-content">

              {/* The Card Header */}
              <div className='card-header'>
                <span className='card-icon'>
                <img src={TruckIcon} alt="Truck Icon" />
                  </span>
                  <span className='card-text'>
                    <p>Professional Farmers</p>
                  </span> 
              </div>

              {/* The Card Line */}
              <div className='card-line-container'>
                <hr className='card-line' />
              </div>

              {/* The P text */}
              <div className='card-sub-text'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi tenetur perspiciatis corrupti! Corrupti dolore</p>
              </div>
            </div>
          </VectorContainer>
        </div>

        {/* 2 */}
        <div className='feature-cards-container'>
          <VectorContainer width={320} height={220} fill={"#fff"}>
            <div className="card-content">

              {/* The Card Header */}
              <div className='card-header'>
                <span className='card-icon'>
                <img src={TruckIcon} alt="Truck Icon" />
                  </span>
                  <span className='card-text'>
                    <p>Professional Farmers</p>
                  </span> 
              </div>

              {/* The Card Line */}
              <div className='card-line-container'>
                <hr className='card-line' />
              </div>

              {/* The P text */}
              <div className='card-sub-text'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi tenetur perspiciatis corrupti! Corrupti dolore</p>
              </div>
            </div>
          </VectorContainer>
        </div>

        {/* 3 */}
        <div className='feature-cards-container'>
          <VectorContainer width={320} height={220} fill={"#fff"}>
            <div className="card-content">

              {/* The Card Header */}
              <div className='card-header'>
                <span className='card-icon'>
                <img src={TruckIcon} alt="Truck Icon" />
                  </span>
                  <span className='card-text'>
                    <p>Professional Farmers</p>
                  </span> 
              </div>

              {/* The Card Line */}
              <div className='card-line-container'>
                <hr className='card-line' />
              </div>

              {/* The P text */}
              <div className='card-sub-text'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi tenetur perspiciatis corrupti! Corrupti dolore</p>
              </div>
            </div>
          </VectorContainer>
        </div>

        {/* 4 */}
        <div className='feature-cards-container'>
          <VectorContainer width={320} height={220} fill={"#fff"}>
            <div className="card-content">

              {/* The Card Header */}
              <div className='card-header'>
                <span className='card-icon'>
                <img src={TruckIcon} alt="Truck Icon" />
                  </span>
                  <span className='card-text'>
                    <p>Professional Farmers</p>
                  </span> 
              </div>

              {/* The Card Line */}
              <div className='card-line-container'>
                <hr className='card-line' />
              </div>

              {/* The P text */}
              <div className='card-sub-text'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi tenetur perspiciatis corrupti! Corrupti dolore</p>
              </div>
            </div>
          </VectorContainer>
        </div>

      </section>
    </>
  )
}

export default FeatureCards
