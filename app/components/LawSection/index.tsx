import {Manrope } from 'next/font/google'
// import IconText from './iconTextProps';
import './index.scss';

const manrope =Manrope ({  
    weight: ['400', '600','700','800'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',})
interface IconTextProps {
        iconSrc: string;
        text: string;
      }
const IconText: React.FC<IconTextProps> = ({ iconSrc, text}) => (
        <>
            
                <img src={iconSrc} alt="Icon" />
                <p >{text}</p>
        </>
      );


const LawFirstPortion = () => {
    return (
        <div className="outer-div">
            <div className={`outer-div__text ${manrope.className}`} >
                <p>Among leave law built now.</p>
            </div>
            <div className="outer-div__icon-and-Text">
                <IconText iconSrc='/images/icons/Star.svg' text='Village did remov enjoyed'/>
                <IconText iconSrc='/images/icons/Award.svg' text='Nay likely length sooner'/>
                <IconText iconSrc='/images/icons/Bulb.svg' text='Expense windows adapted'/>
            </div>
        </div>

    );
};

export default LawFirstPortion;
