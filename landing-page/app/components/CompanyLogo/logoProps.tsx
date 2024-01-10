
import React from 'react';

interface LogoProps {
  className?:string;
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className}/>;
};

export default Logo;
