"use client"
import React, { useState, useEffect } from "react";
import OffenedCard from '@/app/components/OffendCard'
import { Manrope } from "next/font/google";
import './index.scss'

const manrope = Manrope({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
interface OffenedCardData {
  title: string;
  paragraph: string;
  buttonText: string;
}
export default function OffenedSection() {
  const [cardsData, setCardsData] = useState<OffenedCardData[]>([]);

  useEffect(() => {
    fetch('./data/offenedData.json')
      .then(response => response.json())
      .then((data: OffenedCardData[]) => setCardsData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


    return (
      <>
      <div className="offened-section">
        <div className="offened-section__wrapper">
        {cardsData.map((card, index) => (
        <OffenedCard key={index} {...card} manrope={manrope} />
      ))}
      
        </div>
      </div>
      </>
    )
  }