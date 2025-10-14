import React from 'react'
import './Card3.css'
import StarIconGold from './../../assets/images/star-icon-gold.png'
import StarIconGrey from './../../assets/images/star-icon-fade.png'

const Card3 = ({ testimonial, avatarPic, avatarName, avatarPosition}) => {
  return (
    <>
    <section className='Card3Section'>
        <div className='Card3-container'>
            {/* The Star icons */}
            <div className='card3-star-icons'>
                <img src={StarIconGold} alt="star-icon" />
                <img src={StarIconGold} alt="star-icon" />
                <img src={StarIconGold} alt="star-icon" />
                <img src={StarIconGold} alt="star-icon" />
                <img src={StarIconGrey} alt="star-icon" />
            </div>

            {/* The Testimonial Text */}
            <div className='Testimonial-text-container'>
                <p className='Testimonial-text'>
                    {testimonial}
                </p>
            </div>

            {/* The Avatar Pic and Name */}
            <div className='Avatar-container'>
                <div className='Avatar-pic'>
                    <img src={avatarPic} alt={avatarName || 'avatar-pic'} />
                </div>
                <div className='Avatar-name-position'>
                    <p className='Avatar-name'>{avatarName}</p>
                    <p className='Avatar-position'>{avatarPosition}</p>
                </div>
            </div>
        </div>
    </section>
        
    </>
  )
}

export default Card3