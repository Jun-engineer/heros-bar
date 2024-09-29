import React from 'react';
import Image from 'next/image';
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
          <Image 
            src="/bar.jpg"
            alt="Bar"
            width={1000}
            height={900}
          />
        </div>
        <div className="slide">
          <Image
            src="/concept.jpg"
            alt="Concept"
            width={1000}
            height={900}
          />
        </div>
        <div className="slide">
          <Image
            src="/party.jpg"
            alt="Party"
            width={1000}
            height={900}
          />
        </div>
      </Slider>
    </section>
  );
};

export default Slideshow;
