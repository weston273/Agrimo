import React from 'react'
import './Btn1.css'


const Btn1 = ({
    text = "",
    Icon = <img src='' />
}) => {
  return (
    <>
        <button className='Btn1'>
            <div className='Btn1-icon-container'>{Icon}</div>
            <div className='Btn1-text-container'>
                <p>{text}</p>
            </div>
        </button>
    </>
  )
}

export default Btn1