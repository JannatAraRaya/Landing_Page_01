import './index.scss';
import { Manrope } from 'next/font/google'
import Card from '../HelpSectionCard';
import Image from 'next/image';
import HelpBackground from "../../../public/images/helpSection/help-bg.png"
import HandShakeBg from "../../../public/images/helpSection/handshake.jpg"
import Prize from "../../../public/images/helpSection/prize.svg";
import Flower from "../../../public/images/helpSection/flower.svg";
import Sun from "../../../public/images/helpSection/sun.svg";



const manrope = Manrope({
    weight: ['400', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})
const Help = () => {
    return (
        <>
            <div className="help-section">
                <div className="help-section__relative">
                    <div className="help-section__background">
                        <Image className="help-section__background--wave" src={HelpBackground} alt="" />
                    </div>
                    <div className="help-section__box-part">
                        <h2 className={`help-section__box-part--header ${manrope.className}`}>Push your product to next level.</h2>
                        <p className="help-section__box-part--p1">End-to-end payments and financial management in a single </p>
                        <p className="help-section__box-part--p2"> solution. Meet the right platform to help realize.</p>
                        <button>Get Started</button>
                    </div>

                    <div className="help-section__text">
                        <h2 className={`help-section__text--bold ${manrope.className}`}>We help your business grow faster.</h2>
                        <p className={`help-section__text--para ${manrope.className}`} >Why kept very ever home mrs. Considered sympathize ten 
                        {/* <span className={`help-section__text--tilted ${manrope.className}`}>   uncommonly occasional assistance sufficient.</span> */}
                        
                      </p>
                      <p className={`help-section__text--tilted ${manrope.className}`}>   uncommonly occasional assistance sufficient.</p>
                      <button className='help-section__text--button'> More About Platform</button>
                    </div>

                    <div className='help-section__cards--one'>

                        <Card
                            icon="/images/helpSection/prize.svg"
                            title="Offending belonging"
                            text="Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as."
                            readMoreText="Read More"
                        />

                    </div>
                    <div className='help-section__cards--two'>

                        <Card
                            icon="/images/helpSection/flower.svg"
                            title="Promotion & provision"
                            text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. "
                            readMoreText="Read More"
                        />

                    </div>
                    <div className='help-section__cards--three'>
                        <Card
                            icon="/images/helpSection/sun.svg"
                            title="Blessing application"
                            text="Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must shew. Really boy law county she unable her sister."
                            readMoreText="Read More"
                        />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Help;
