import React from 'react'
import WhoWeAreSection from './above-title/WhoWeAreSection'
import LeafIcon from './../assets/images/leaf-icon.png'
import IconsText from './../components/IconsText/IconsText'
import HandIcon from './../assets/images/hand-icon.png'
import QualityIcon from './../assets/images/quality-icon.png'
import Corn from './../assets/images/corn.png'

import './ChoosePerfect.css'

const ChoosePerfect = () => {
  return (
    <>
      <section className='choosePerfectSection'>
        {/* Header Icon */}
        <div className='choose-perfect-header-icon-container'>
          <WhoWeAreSection icon={LeafIcon} title='Grow Naturally'/>
        </div>
        {/* The Header Text in the section */}

        <div className='choose-perfect-header-text-container'>
          <p className='choose-perfect-header-text'>
            Choose What's Perfect <br />
            For Your Field
          </p>
        </div>

        {/* The 3 main sections of the ChoosePerfect */}

        {/* Left Section */}
        <div className='choose-perfect-all-sections'>

<div className='choose-perfect-icons-text-container'>
    <div className='choose-perfect-icons-text'>
            <IconsText icon={HandIcon} header='Agriculture Products' paragraph={<>
                Nullam stuff is stuff without <br />
                other stuff- sensational.
              </>} />

          </div>

          <div className='choose-perfect-icons-text'>
               <IconsText icon={QualityIcon} header='Agriculture Products' paragraph={<>
                Nullam stuff is stuff without <br />
                other stuff- sensational.
              </>} />
          </div>
</div>
          

          {/* Middle Section */}
          <div className='choose-perfect-middle-image'>
              <img src={Corn} alt='Corn image' />
          </div>

          {/* Right Section */}
          <div className='choose-perfect-icons-text-container'>
    <div className='choose-perfect-icons-text'>
            <IconsText icon={HandIcon} header='Agriculture Products' paragraph={<>
                Nullam stuff is stuff without <br />
                other stuff- sensational.
              </>} />

          </div>

          <div className='choose-perfect-icons-text'>
               <IconsText icon={QualityIcon} header='Agriculture Products' paragraph={<>
                Nullam stuff is stuff without <br />
                other stuff- sensational.
              </>} />
          </div>
</div>
        </div>
      </section>
    </>
  )
}

export default ChoosePerfect