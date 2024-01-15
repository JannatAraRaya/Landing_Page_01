"use client"
import React, { useState } from "react";
import "./index.scss";
import { Manrope } from "next/font/google";
import Image from 'next/image';
import Navbar from "@/app/components/Navbar";
import HeroSectionBg from '../../../public/images/hero-img.png';
import HeroSection from "@/app/components/HeroSection";
const manrope = Manrope({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function HeaderSection() {
  const [buttonEffect, setButtonEffect] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleButtonClick = () => {
    setButtonEffect(true);
  };

  const handleToggleClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const links = [
    { href: '/', label: 'Product' },
    { href: '/', label: 'Template' },
    { href: '/', label: 'Blog' },
    { href: '/', label: 'Pricing' },
  ];
  const signInLink = '/';


  return (
    <>
      <div className="header">        
        <Navbar manrope={manrope} links={links} signInLink={signInLink} />
         <HeroSection
      title="Product Growth Solution in Single Platform."
      subtitle="Managing business payments has never been easier"
      description="Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly."
      email="shakir260@gmail.com"
      buttonText="Submit"
      fontClass={manrope.className}
    />
      </div>

    </>
  );
}
