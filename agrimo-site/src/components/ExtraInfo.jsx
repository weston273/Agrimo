import React from 'react'
import './ExtraInfo.css'
import WhoWeAreSection from './above-title/WhoWeAreSection'
import LeafIcon from './../assets/images/leaf-icon.png'

const ExtraInfo = () => {
  return (
    <>
      <section className='ExtraInfoContainer'>
        <div className='extra-info-above-container'>
          {/* Above Title */}
        <div className='extra-info-above-title'>
          <WhoWeAreSection icon={LeafIcon} title='What We Do' />
        </div>

        <div className='extra-info-header-text-container'>
          <p className='extra-info-header-text'>
            Healthy life with fresh <br />
            products.
          </p>
        </div>

        <div className='extra-info-paragraph-text'>
          <p>
            There are many variations of passages of Lorem Ipsum available , but the <br />
            majority have suffered alteration in some form, by injected humour, or < br />
            randomised words which we don't look even.
          </p>
        </div>
        </div>
        
      </section>
    </>
  )
}

export default ExtraInfo