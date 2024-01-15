import React from 'react';
import './index.scss'
interface OffenedCardProps {
    manrope: any;
  title: string;
  paragraph: string;
  buttonText: string;
}

const OffenedCard: React.FC<OffenedCardProps> = ({ manrope,title, paragraph, buttonText }) => {
  return (
    <div className="offened-card">
      <h1 className={ `offened-card__header ${manrope.className}`}dangerouslySetInnerHTML={{ __html: title }}/>
      <p className='offened-card__para' dangerouslySetInnerHTML={{ __html: paragraph }}/>
      <button className={ ` offened-card__btn ${manrope.className}`}>{buttonText}</button>
    </div>
  );
};

export default OffenedCard;
