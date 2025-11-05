import React from 'react';
import './Testimonials.css';
import WhoWeAreSection from './../components/above-title/WhoWeAreSection';
import LeafIcon from './../assets/images/leaf-icon.png';
import Btn2 from './../components/Buttons/Btns2';
import BtnArrowIcon from './../components/icons/BtnArrowIcon';
import Card3 from './../components/cards/Card3';
import AvatarImage from './../assets/images/avatar-image.jpg'
import AvatarImage2 from './../assets/images/avatar-image-2.jpg'
import AvatarImage3 from './../assets/images/avatar-image-3.jpg'

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
            <Btn2 Icon={<BtnArrowIcon direction='right' color='black' size='20' />} />
            <Btn2 Icon={<BtnArrowIcon direction='left' color='black' size='20' />} />
          </div>
        </div>

        {/* Example Card Section */}
        <div className='testimonials-cards-container'>
          <Card3 
          testimonial="I would recommend practitioners at 
            this center to everyone! They are great
            to work with and are excellent trainers.
            Thank you all!" avatarName='Martin Bailey' avatarPosition='Supervisor' avatarPic={AvatarImage}
          />
          <Card3
            testimonial="I would recommend practitioners at 
            this center to everyone! They are great
            to work with and are excellent trainers.
            Thank you all!" avatarName='Emma Greed' avatarPosition='Customer' avatarPic={AvatarImage2}
          />
          <Card3 testimonial="I would recommend practitioners at 
            this center to everyone! They are great
            to work with and are excellent trainers.
            Thank you all!" avatarName='Daniel Craig' avatarPosition='Co Founder' avatarPic={AvatarImage3}/>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
