import {Manrope } from 'next/font/google'
import React from 'react';
import './index.scss'

interface CardProps {
    icon: string | React.ReactElement;
    title: string;
    text: string;
    readMoreText: string;
}
const manrope =Manrope ({  
    weight: ['400', '600','700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',})
  
const Card: React.FC<CardProps> = ({ icon, title, text, readMoreText }) => {
    return (
        <div className="card">
            <div className="card__icon">
                {typeof icon === 'string' ? (
                    <img src={icon} alt="Icon" />
                ) : (
                    <>{icon}</>
                )}
            </div>
            <div className={`card__content ${manrope.className}`}>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className="card__read-more">
                    {readMoreText} <span>&rarr;</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
