
import React, { useEffect, useState } from 'react';
import { Manrope } from 'next/font/google';
import Card from '../../components/HelpSectionCard';
import Image from 'next/image';
import HelpBackground from "../../../public/images/helpSection/help-bg.png";
import './index.scss'

const manrope = Manrope({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});
interface HelpItem {
  icon: string;
  title: string;
  text: string;
  readMoreText: string;
}
const HelpSection = () => {
  const [helpData, setHelpData] = useState<HelpItem[]>([]);

  useEffect(() => {
    fetch('./data/helpSection.json') 
      .then(response => response.json())
      .then(data => setHelpData(data))
      .catch(error => console.error('Error fetching help data:', error));
  }, []);

  return (
    <>
      <div className="help-section">
        <div className="help-section__relative">
        <div className="help-section__background">
                        <Image className="help-section__background--wave" src={HelpBackground} alt="" />
                    </div>
                    <div className="help-section__box-part">
                        <h2 className={`help-section__box-part--header ${manrope.className}`}>Push your product to next level.</h2>
                        <p className="help-section__box-part--p1">End-to-end payments and financial management in a single </p>
                        <p className="help-section__box-part--p2"> solution. Meet the right platform to help realize.</p>
                        <button>Get Started</button>
                    </div>

                    <div className="help-section__text">
                        <h2 className={`help-section__text--bold ${manrope.className}`}>We help your business grow faster.</h2>
                        <p className={`help-section__text--para ${manrope.className}`} >Why kept very ever home mrs. Considered sympathize ten 
                        
                        
                      </p>
                      <p className={`help-section__text--tilted ${manrope.className}`}>   uncommonly occasional assistance sufficient.</p>
                      <button className='help-section__text--button'> More About Platform</button>
                    </div>
          <div className='help-section__cards--one'>
            {helpData.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                text={item.text}
                readMoreText={item.readMoreText}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpSection;
