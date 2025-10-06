import React from 'react'
import OrganicIcon from './../assets/images/client-logo-02.png.png'
import TrucktorIcon from './../assets/images/client-logo-01.png.png'
import FarmIcon from './../assets/images/client-logo-03.png.png'
import FarmFreshIcon from './../assets/images/client-logo-04.png.png'
import FoodIcon from './../assets/images/client-logo-05.png.png'
import EcoProductIcon from './../assets/images/client-logo-06.png.png'

import './Partners.css'

const Partners = () => {
  return (
    <>
      <section className='PartnersSection'>
        <div className='partners-organic-container'>
          <img src={OrganicIcon} alt='Organic icon ' />
        </div>
        {/* 2 */}
        <div className='partners-organic-container'>
          <img src={FarmIcon} alt='Organic icon ' />
        </div>
        {/* 3 */}
        <div className='partners-organic-container'>
          <img src={FarmFreshIcon} alt='Organic icon ' />
        </div>
        {/* 4 */}
        <div className='partners-organic-container'>
          <img src={FoodIcon} alt='Organic icon ' />
        </div>
        {/* 5 */}
        <div className='partners-organic-container'>
          <img src={EcoProductIcon} alt='Organic icon ' />
        </div>
        {/* 6 */}
        <div className='partners-organic-container'>
          <img src={TrucktorIcon} alt='Organic icon ' />
        </div>
      </section>
    </>
  )
}

export default Partners