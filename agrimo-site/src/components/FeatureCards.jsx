import React from 'react'
import VectorContainer from './containers/VectorContainer'
import './FeatureCards.css'
import TruckIcon from './../assets/images/truck-icon.png'
import FeatureCard from './../components/cards/FeatureCard'

const FeatureCards = () => {
  return (
    <>
      <section className='feature-cards-section'>
        <FeatureCard icon={TruckIcon} title='Professional Farmers' />
      </section>
    </>
  )
}

export default FeatureCards
