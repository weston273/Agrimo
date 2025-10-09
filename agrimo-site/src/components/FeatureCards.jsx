import React from 'react'
import VectorContainer from './containers/VectorContainer'
import './FeatureCards.css'
import TruckIcon from './../assets/images/truck-icon.png'
import FeatureCard from './../components/cards/FeatureCard'
import HandIcon from './../assets/images/hand-icon.png'
import QualityIcon from './../assets/images/quality-icon.png'
import LeavesIcon from './../assets/images/leaves-icon.png'

const FeatureCards = () => {
  return (
    <>
      <section className='feature-cards-section'>
        <FeatureCard icon={TruckIcon} title='Professional Farmers' description='Nullam porta enim vel tellus commodo,
eget laoreet odio ultrices.' />

{/* card 2 */}
      <FeatureCard icon={HandIcon} title='Fresh Vegetables' description='Nullam porta enim vel tellus commodo,
eget laoreet odio ultrices.' />
{/* card 3 */}
      <FeatureCard icon={QualityIcon} title='Agriculture Products' description='Nullam porta enim vel tellus commodo,
eget laoreet odio ultrices.' />
{/* card 4 */}
      <FeatureCard icon={LeavesIcon} title='100% Guaranteed' description='Nullam porta enim vel tellus commodo,
eget laoreet odio ultrices.' />
      </section>
    </>
  )
}

export default FeatureCards
