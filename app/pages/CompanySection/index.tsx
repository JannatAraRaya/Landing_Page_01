"use client"
import React, { useState, useEffect } from 'react';
import ComapanyText from '@/app/components/CompanySectionText'
import './index.scss'

interface LogoProps {
  className?: string;
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};


export default function Companies() {
  const [logos, setLogos] = useState<LogoProps[]>([]);

  useEffect(() => {
    fetch('./data/companyLogo.json')
      .then(response => response.json())
      .then(data => setLogos(data))
      .catch(error => console.error('Error fetching logos:', error));
  }, []);

  return (
    <>
      <div className="main-div">

        <ComapanyText />
        <div className="logos">
          {logos.map((logo, index) => (
            <Logo key={index} src={logo.src} alt={logo.alt} className='logos--logoItem' />
          ))}
        </div>
      </div>
    </>
  )
}