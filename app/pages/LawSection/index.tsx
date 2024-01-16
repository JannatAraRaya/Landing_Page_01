"use client"
import React, { useEffect, useState } from 'react';
import { Manrope } from 'next/font/google';
import './index.scss';

const manrope = Manrope({
  weight: ['400', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

interface IconData {
  text: string;
  iconSrc: string;
}

interface IconTextProps {
  iconSrc: string;
  text: string;
}

const IconText: React.FC<IconTextProps> = ({ iconSrc, text }) => (
  <>
    <img src={iconSrc} alt="Icon" />
    <p>{text}</p>
  </>
);

const LawSection = () => {
  const [lawData, setLawData] = useState<IconData[]>([]);

  useEffect(() => {
    fetch('./data/lawData.json') 
      .then((response) => response.json())
      .then((data: IconData[]) => setLawData(data))
      .catch((error) => console.error('Error fetching law data:', error));
  }, []);

  return (
    <div className="outer-div">
      <div className={`outer-div__text ${manrope.className}`}>
        <p>Among leave law built now.</p>
      </div>
      <div className="outer-div__icon-and-Text">
        {lawData.map((item, index) => (
          <IconText key={index} iconSrc={item.iconSrc} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default LawSection;
