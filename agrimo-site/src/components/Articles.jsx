import React from 'react'
import WhoWeAre from './../components/above-title/WhoWeAreSection'
import LeafIcon from './../assets/images/leaf-icon.png'
import Btn2 from './Buttons/Btns2'
import BtnArrowIcon from './../components/icons/BtnArrowIcon'
import './Articles.css'
const Articles = () => {
  return (
    <>
      <section className='ArticlesSection'>
        {/* Above title */}
        <div className='articles-above-title'>
          <WhoWeAre icon={LeafIcon} title='Latest Blog' />
        </div>

        {/* Header text + buttons */}
        <div className='articles-header-text-btns'>
          <div className='articles-header-text'>
            <p>
                Latest posts & articles 
            </p>
          </div>

          {/* left and right btns */}
          <div className='articles-left-right-btns'>
            {/* <div className='articles-left-btn'> */}
               <Btn2 
              Icon={<BtnArrowIcon direction='right' color='black' size='20' />}
            />
            <Btn2 
              Icon={<BtnArrowIcon direction='left' color='black' size='20' />}
            />
            
          </div>
        </div>

        {/* Article Images */}
        <div>
          
        </div>
      </section>
    </>
  )
}

export default Articles