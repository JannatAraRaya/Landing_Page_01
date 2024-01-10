import React from 'react';
import Logo from './logoProps';
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

const CompanyLogo: React.FC = () => {
  return (
      <div className="main-div__logos">
        {logos.map((logo, index) => (
            <Logo key={index} src={logo.src}  alt={logo.alt} className='main-div__logos--logoItem'/>
        ))}
      </div>
  );
};

export default CompanyLogo;
