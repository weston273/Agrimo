import React from 'react'
import './IconsText.css'

const IconsText = ({ icon, header, paragraph, altText }) => {
  return (
    <>
        <div className='IconsTextContainer'>
            <div className='icons-text-header-container'>
                <div className='icons-text-icon-container'>
                    <img src={icon} alt={`the ${altText}`} />
                </div>
               
            </div>
            

            <div className='icons-text-text-container'>
               <div className='icons-text-header-text'>
                    <p>
                        {header}
                    </p>
                </div>
                <div className='icons-text-paragraph-text'>
                    <p>
                        {paragraph}
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default IconsText