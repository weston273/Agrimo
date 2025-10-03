import React from 'react'
import EllipseBullet from '../ElipseBullet'
import './CardTitle.css'

const CardTitle = ({cardTitleText=''}) => {
  return (
    <>
        <div className='CardTitleContainer'>
            <div className='ElipseContainer'>
                <EllipseBullet />
            </div>
            <div>
                <p>{cardTitleText}</p>
            </div>
        </div>
    </>
  )
}

export default CardTitle