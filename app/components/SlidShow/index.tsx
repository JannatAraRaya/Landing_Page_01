import React from 'react';
import Slider from 'react-slick';
import { useTestimonialContext } from "@/app/pages/TestimonialContext";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';
import { CustomNextArrow, CustomPrevArrow } from '../CustomArrow';

const TestimonialSlider: React.FC = () => {
  const { testimonials, currentIndex, setCurrentIndex } = useTestimonialContext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentIndex(index),
    prevArrow: <CustomPrevArrow src="/images/testimonial/prev.png" alt="Previous Arrow" />,
    nextArrow: <CustomNextArrow src="/images/testimonial/next.png" alt="Next Arrow" />,
  };

  return (
    <div className="testimonial-section__image">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <img src={testimonial.image} alt={`Review ${index + 1}`} />
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default TestimonialSlider;
