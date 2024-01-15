"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SlideshowProps {
  slides: {
    image: string;
    review: string;
  }[];
}

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slideshowContainer">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="imageContainer">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
            <div className="reviewContainer">
              <p>{slide.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
