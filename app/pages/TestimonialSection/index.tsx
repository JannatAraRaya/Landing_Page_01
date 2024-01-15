"use client"
import { Manrope } from "next/font/google";

import './index.scss'
import Slideshow from "@/app/components/SlidShow";

const manrope = Manrope({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const slides = [
  {
    image: '/images/slide-img.png',
    review: 'This is the review for Slide 1.',
  },
  {
    image: '/images/slide-img.png',
    review: 'This is the review for Slide 2.',
  },
  {
    image: '/images/slide-img.png',
    review: 'This is the review for Slide 3.',
  },
];
export default function TestimonialSection() {



  return (
    <>
      <div className="testimonial-section">
        <div className="testimonial-section__wrapper">
          <div className="testimonial-section__text">
            <p className={`testimonial-section__first ${manrope.className}`}>Testimonials</p>
            <h1 className={`testimonial-section__h1 ${manrope.className}`}>Check what our clients are saying</h1>
          </div>
          <div className="testimonial-section__middle">
              
          </div>
        </div>
      </div>
    </>
  )
}