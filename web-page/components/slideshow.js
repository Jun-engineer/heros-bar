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
            src="/image/bar.jpg"
            alt="Bar"
            width={1920}
            height={1080}
          />
        </div>
        <div className="slide">
          <Image
            src="/image/concept.jpg"
            alt="Concept"
            width={1920}
            height={1080}
          />
        </div>
        <div className="slide">
          <Image
            src="/image/party.jpg"
            alt="Party"
            width={1920}
            height={1080}
          />
        </div>
      </Slider>
    </section>
  );
};

export default Slideshow;
