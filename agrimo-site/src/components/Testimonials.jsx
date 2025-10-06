import React from 'react'
import './Testimonials.css'
import  WhoWeAreSection from './../components/above-title/WhoWeAreSection'
import LeafIcon from './../assets/images/leaf-icon.png'
import Btn2 from './../components/Buttons/Btns2'
import ArrowIcon from './../components/icons/BtnArrowIcon'
import BtnArrowIcon from './../components/icons/BtnArrowIcon'
import Card2 from './../components/cards/Card2'

const Testimonials = () => {
  return (
    <>
      <section className='TestimonialsSection'>
        {/* above title */}
        <div className='testimonials-above-title-container'>
          <WhoWeAreSection icon={LeafIcon} title='Testimonial'/>
        </div>

        <div className='testimonials-header-text-btns-container'>
          <div className='testimonials-header-text'>
            <p>
              What Our Customers say
            </p>
          </div>
          {/* the left-right btns */}
          <div className='testimonials-left-right-btns'>
             <Btn2 
              Icon={<BtnArrowIcon direction='right' color='black' size='20' />}
            />
            <Btn2 
              Icon={<BtnArrowIcon direction='left' color='black' size='20' />}
            />
          </div>
        </div>


      </section>
    </>
  )
}

export default Testimonials