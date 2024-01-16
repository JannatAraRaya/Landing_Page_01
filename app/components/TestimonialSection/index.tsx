"use client"
import { Manrope } from "next/font/google";
import Image from 'next/image';
import './index.scss'
import Slideshow from "@/app/components/SlidShow";
import Ellipse from '../../../public/images/testimonial/Ellipse.png';
import UpperEllipse from '../../../public/images/testimonial/Upper-Ellipse.png';
import UpperRightDots from '../../../public/images/testimonial/Upper-right-dots.svg';
import DotWave from '../../../public/images/testimonial/dot-wave.png';
import Comma from '../../../public/images/testimonial/inverted-comma.svg';
import Segment from '../../../public/images/testimonial/segment.png';
import { TestimonialProvider } from "@/app/pages/TestimonialContext";
import TestimonialSlider from "@/app/components/SlidShow";
import TestimonialReview from "@/app/components/Review";

const manrope = Manrope({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function TestimonialSection() {
  return (
    <>
      <div className="testimonial-section">
        <div className="testimonial-section__wrapper">
          <div className="testimonial-section__text">
            <p className={`testimonial-section__first ${manrope.className}`}>Testimonials</p>
            <h1 className={`testimonial-section__h1 ${manrope.className}`}>Check what our clients are saying</h1>
          </div>
          <TestimonialProvider>
            <div className="testimonial-section__middle">
              <div className="testimonial-section__slider">
                <TestimonialSlider />
                <div className="testimonial-section__background">
                  <div className="testimonial-section__background--cyan"></div>
                  <Image className="testimonial-section__background--ellipse" src={Ellipse} alt="" />
                  <Image className='testimonial-section__background--upper-ellipse' src={UpperEllipse} alt="" />
                  <Image className='testimonial-section__background--dots' src={UpperRightDots} alt="" />
                  <Image className='testimonial-section__background--dot-wave' src={DotWave} alt="" />
                </div>
              </div>
              <div className="testimonial-section__review">

                <div className="testimonial-section__review-background">
                  <Image className="testimonial-section__review-background--comma" src={Comma} alt="" />
                  <div className="testimonial-section__company-logo">
                    <h1>AR Shakir</h1>
                    <p>CEO GetNextDesign</p>
                  </div>

                  <div className="testimonial-section__logo">
                  <Image src={Segment} alt="" />
                  </div>
                  <TestimonialReview />
                </div>

              </div>
            </div>
          </TestimonialProvider>
        </div>
      </div>
    </>
  )
}