import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <section className="hero">
      <Slider {...settings}  className="hero-image">
        <div className="slide">
          <img src="/bar.jpg" alt="Bar" />
        </div>
        <div className="slide">
          <img src="/concept.jpg" alt="Concept" />
        </div>
        <div className="slide">
          <img src="/party.jpg" alt="Party" />
        </div>
      </Slider>
    </section>
  );
};

export default Slideshow;
