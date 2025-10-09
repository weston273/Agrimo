import React from 'react'
import './Card2.css'
import CardTitle from './CardTitle'

const Card2 = ({ card2Image=null, card2Header = null,card2Text = null }) => {
  return (
    <>
      <div
              
         className='Card2Container'
      >
        {/* Card Image */}
        <div className='card2-image-container'>
          <img src={card2Image} alt={card2Header || 'card2-image'} />
        </div>
          {/* The Title of the Card */}
       
        {/* The Header text of the card */}
        <div className='card2-head-text-container'>
          <p>{card2Header}</p>
        </div>

    

        <div className='card2-text-container'>
          <p>
            {card2Text}
          </p>
        </div>
      </div>
    </>
  )
}

export default Card2
