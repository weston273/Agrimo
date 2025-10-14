import React from 'react'
import WhoWeAre from './../components/above-title/WhoWeAreSection'
import LeafIcon from './../assets/images/leaf-icon.png'
import Btn2 from './Buttons/Btns2'
import BtnArrowIcon from './../components/icons/BtnArrowIcon'
import ArticleCard from './../components/cards/ArticleCard' // ← NEW IMPORT
import './Articles.css'

// Example images — update with actual images from your assets folder
import img1 from './../assets/images/img1.jpg'
import img2 from './../assets/images/img2.jpg'
import img3 from './../assets/images/img3.jpg'


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
            <p>Latest posts & articles</p>
          </div>

          {/* Left and right buttons */}
          <div className='articles-left-right-btns'>
            <Btn2 Icon={<BtnArrowIcon direction='left' color='black' size='20' />} />
            <Btn2 Icon={<BtnArrowIcon direction='right' color='black' size='20' />} />
          </div>
        </div>

        {/* Article Cards */}
        <div className='articles-card-container'>
          <ArticleCard
            image={img1}
            category="FOOD CROPS"
            title="What technology is used in vertical farming?"
            date="MARCH 28, 2024"
            author="ADMIN"
          />
          <ArticleCard
            image={img2}
            category="ORGANIC FARM"
            title="Which type of farming is more prevalent today?"
            date="MARCH 28, 2024"
            author="ADMIN"
          />
          <ArticleCard
            image={img3}
            category="FARMING TIPS"
            title="The Farmers Sentiment Darkens Hopes Fade"
            date="MARCH 28, 2024"
            author="ADMIN"
          />
        </div>
      </section>
    </>
  )
}

export default Articles
