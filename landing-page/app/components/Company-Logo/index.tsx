import React from 'react';
import './index.scss'

const logos = [
  { src: '/images/companyLogo/OpenZeppelin.svg', alt: '1' },
  { src: '/images/companyLogo/Oracle.svg', alt: '2' },
  { src: '/images/companyLogo/Morpheus.svg', alt: '3' },
  { src: '/images/companyLogo/Sumsung.svg', alt: '4' },
  { src: '/images/companyLogo/Monday.svg', alt: '5' },
  { src: '/images/companyLogo/Segment.svg', alt: '6' },
  { src: '/images/companyLogo/Protonet.svg', alt: '7' },
];
interface LogoProps {
  className?:string;
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className}/>;
};
const CompanyLogo: React.FC = () => {
  return (
      <div className="logos">
        {logos.map((logo, index) => (
            <Logo key={index} src={logo.src}  alt={logo.alt} className='logos--logoItem'/>
        ))}
      </div>
  );
};

export default CompanyLogo;
