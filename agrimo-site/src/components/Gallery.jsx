import React from 'react'
import Farmerr from './../assets/images/farmerr.png'
import './Gallery.css'

const Gallery = () => {
  return (
    <>
      {/* Need to make a carousel of moving images*/}
      <section className='GallerySection'>
        <div className='gallery-left-image'>
          <img src={Farmerr} alt="farmer-image" />
        </div>

        {/* Middle Images */}
        <div className='gallery-middle-images'>
            <div className='gallery-left-middle-image'>
              <img src={Farmerr} alt="farmer-image" />
            </div>
            
            <div className='gallery-right-middle-image'>
              <img src={Farmerr} alt="farmer-image" />
            </div>
        </div>

        {/* Right Image */}
        <div className='gallery-right-image'>
          <img src={Farmerr} alt="farmer-image" />
        </div>

      </section>
    </>
  )
}

export default Gallery