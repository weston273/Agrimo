import React from 'react'
import './ExtraInfo.css'
import WhoWeAreSection from './above-title/WhoWeAreSection'
import LeafIcon from './../assets/images/leaf-icon.png'
import FarmerImage from './../assets/images/farmers-bg.jpg' // replace with your farmer image

const ExtraInfo = () => {
  return (
    <>
      <section className='ExtraInfoSection'>
        {/* Left Image Section */}
        <div className='extra-info-left'>
          <img src={FarmerImage} alt='Farmer working on field' />
        </div>

        {/* Right Yellow Info Box */}
        <div className='extra-info-right'>
          <div className='extra-info-content'>
            <WhoWeAreSection icon={LeafIcon} title='What We Do' />

            <h2 className='extra-info-header-text'>
              Healthy life with fresh <br /> products
            </h2>

            <p className='extra-info-paragraph'>
              There are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected humour, or
              randomised words which don’t look even.
            </p>

            <div className='extra-info-stats'>
              <div className='info-stat'>
                <div className='stat-circle'>90%</div>
                <p>
                  Eco Farms <br /> Worldwide
                </p>
              </div>
              <div className='info-stat'>
                <div className='stat-circle'>78%</div>
                <p>
                  Special <br /> Equipment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ExtraInfo
