import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "The food was fantastic! Will definitely order again.",
      profilePic: "https://via.placeholder.com/100"
    },
    {
      name: "Jane Smith",
      feedback: "Great service and delicious meals.",
      profilePic: "https://via.placeholder.com/100"
    },
    {
      name: "Sam Johnson",
      feedback: "Loved the variety of dishes available.",
      profilePic: "https://via.placeholder.com/100"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  return (
    <div id='testimonial'>
      <h2>What Our Customers Say</h2>
      <Slider {...settings} className='testimonial-slider'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='testimonial-item'>
            <img src={testimonial.profilePic} alt={`${testimonial.name}'s profile`} className='profile-pic' />
            <p className='feedback'>{testimonial.feedback}</p>
            <p className='user-name'>{testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
