"use client"
import React, { useState, useEffect } from "react";
import "./index.scss";
import { Manrope } from "next/font/google";
import Image from 'next/image';
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";

interface Link {
  href: string;
  label: string;
}

interface HeroSectionData {
  title: string;
  subtitle: string;
  description: string;
  email: string;
  buttonText: string;
}

interface HeaderData {
  links: Link[];
  signInLink: string;
  heroSection: HeroSectionData;
}

const manrope = Manrope({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function HeaderSection() {
  const [buttonEffect, setButtonEffect] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [data, setData] = useState<HeaderData | null>(null);

  useEffect(() => {
    fetch('./data/data.json')
      .then(response => response.json())
      .then((jsonData: HeaderData) => {
        console.log('Data received:', jsonData);
        setData(jsonData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);  


  const links = data ? data.links : [];
  const signInLink = data ? data.signInLink : '/';

  return (
    <>
      <div className="header">        
        <Navbar manrope={manrope} links={links} signInLink={signInLink} />
        <HeroSection
          title={data ? data.heroSection.title : ""}
          subtitle={data ? data.heroSection.subtitle : ""}
          description={data ? data.heroSection.description : ""}
          email={data ? data.heroSection.email : ""}
          buttonText={data ? data.heroSection.buttonText : ""}
          fontClass={manrope.className}
        />
      </div>
    </>
  );
}
