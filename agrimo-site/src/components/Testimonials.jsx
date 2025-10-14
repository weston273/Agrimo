import React from 'react';
import './Testimonials.css';
import WhoWeAreSection from './../components/above-title/WhoWeAreSection';
import LeafIcon from './../assets/images/leaf-icon.png';
import Btn2 from './../components/Buttons/Btns2';
import BtnArrowIcon from './../components/icons/BtnArrowIcon';
import Card3 from './../components/cards/Card3';

const Testimonials = () => {
  return (
    <>
      <section className='TestimonialsSection'>
        {/* Above title */}
        <div className='testimonials-above-title-container'>
          <WhoWeAreSection icon={LeafIcon} title='Testimonial' />
        </div>

        {/* Header text and arrows */}
        <div className='testimonials-header-text-btns-container'>
          <div className='testimonials-header-text'>
            <p>What Our Customers Say</p>
          </div>
          <div className='testimonials-left-right-btns'>
            <Btn2 Icon={<BtnArrowIcon direction='left' color='black' size='20' />} />
            <Btn2 Icon={<BtnArrowIcon direction='right' color='black' size='20' />} />
          </div>
        </div>

        {/* Example Card Section */}
        <div className='testimonials-cards-container'>
          <Card3 
          testimonial="I would recommend practitioners at 
            this center to everyone! They are great
            to work with and are excellent trainers.
            Thank you all!" avatarName='Martin Bailey' avatarPosition='Supervisor'
          />
          <Card3
            testimonial="I would recommend practitioners at 
            this center to everyone! They are great
            to work with and are excellent trainers.
            Thank you all!" avatarName='Emma Greed' avatarPosition='Customer'
          />
          <Card3 testimonial="I would recommend practitioners at 
            this center to everyone! They are great
            to work with and are excellent trainers.
            Thank you all!" avatarName='Daniel Craig' avatarPosition='Co Founder'/>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
