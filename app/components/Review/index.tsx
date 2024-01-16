"use client"
import React from 'react';
import './index.scss'
import { useTestimonialContext } from "@/app/pages/TestimonialContext";

const TestimonialReview: React.FC = () => {
  const { testimonials, currentIndex } = useTestimonialContext();
  const currentTestimonial = testimonials[currentIndex];
  console.log(testimonials,"review")

  return (
    <div className="testimonial-section__review-slide">
      {currentTestimonial ? (
        <>
          <img src={currentTestimonial.rating} />
          <p>{currentTestimonial.review}</p>
        </>
      ) : (
        <p>No testimonial available</p>
      )}
    </div>
  );
};

export default TestimonialReview;
