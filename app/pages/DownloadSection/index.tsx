"use client"
import React, { useState, useEffect } from "react";
import { Manrope } from "next/font/google";
import './index.scss'
import DownloadBlock from "@/app/components/Download";

const manrope = Manrope({
    weight: ["400", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
});

interface DownloadSectionData {
    smallParagraph: string;
    h1Text: string;
    twoLineParagraph: string;
    button1Text: string;
    button2Text: string;
    button1LogoPath: string;
    button2LogoPath: string;
  }
  
export default function DownloadSection() {
    const [downloadData, setDownloadData] = useState<DownloadSectionData | null>(null);

    useEffect(() => {
      fetch('./data/downloadData.json')
        .then(response => response.json())
        .then((data: DownloadSectionData) => setDownloadData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    if (!downloadData) {
      return null;
    }


    return (
        <>
            <div className="download-section">
                <div className="download-section__wrapper">
                    <DownloadBlock {...downloadData} manrope={manrope}  />

                </div>
            </div>
        </>
    )
}