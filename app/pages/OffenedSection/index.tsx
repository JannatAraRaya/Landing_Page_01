import OffenedCard from '@/app/components/OffendCard'
import { Manrope } from "next/font/google";
import './index.scss'

const manrope = Manrope({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function OffenedSection() {
  const cardsData = [
    {
      title: 'Offend belong <br/> promote provision',
      paragraph: 'Wise busy past both park when an ye no. Nay likely her length sooner <br/> thrown sex lively income. ',
       buttonText: 'Read More',
    },
    {
      title: 'Consulted ourselves it <br/> blessing welcom',
      paragraph: 'The expense windows adapted sir. Wrong widen drawn ample eat <br/> off doors money.',
      buttonText: 'Read More',
    },
  ];


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