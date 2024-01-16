"use client"
import React, { useState, useEffect } from "react";
import { Manrope } from "next/font/google";
import './index.scss';

const manrope = Manrope({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function TrackSection() {
  const [sectionData, setSectionData] = useState({
    sectionText: {
      p1: "",
      h1: "",
      p2: ""
    },
    inputPlaceholder: {
      email: "",
      password: ""
    },
    submitButton: ""
  });
  useEffect(() => {
    fetch('./data/track.json') 
      .then(response => response.json())
      .then(data => setSectionData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div className="track-section">
      <div className="track-section__wrapper">
        <div className="track-section__text">
          <p className="track-section__p1">{sectionData.sectionText.p1}</p>
          <h1 className="track-section__h1">{sectionData.sectionText.h1}</h1>
          <p className="track-section__p2">{sectionData.sectionText.p2}</p>
        </div>
        <div className="track-section__input">
          <input type="email" placeholder={sectionData.inputPlaceholder.email} />
          <input type="password" placeholder={sectionData.inputPlaceholder.password} />
          <input type="submit" value={sectionData.submitButton} />
        </div>
      </div>
    </div>
  );
}
