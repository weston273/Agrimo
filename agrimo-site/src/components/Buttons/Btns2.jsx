import React from 'react'
import './Btn2.css'


const Btn2 = ({
    text = "",
    Icon = <img src='' />
}) => {
  return (
    <>
        <button className='Btn2'>
            <div className='Btn2-icon-container'>{Icon}</div>
            <div className='Btn2-text-container'>
                <p>{text}</p>
            </div>
        </button>
    </>
  )
}

export default Btn2