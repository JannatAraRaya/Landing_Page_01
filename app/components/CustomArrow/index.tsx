import React from 'react';
import './index.scss'

interface CustomArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  src: string;
  alt: string;
}

export const CustomPrevArrow: React.FC<CustomArrowProps> = ({ className, onClick, src, alt }) => (
  <img
    className={`custom-prev-arrow ${className}`}
    onClick={onClick}
    src={src}
    alt={alt}
  />
);

export const CustomNextArrow: React.FC<CustomArrowProps> = ({ className, onClick, src, alt }) => (
  <img
    className={`custom-next-arrow ${className}`}
    onClick={onClick}
    src={src}
    alt={alt}
  />
);
