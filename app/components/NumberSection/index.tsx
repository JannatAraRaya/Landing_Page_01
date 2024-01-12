import './index.scss';
import { Manrope } from 'next/font/google'
import Image from 'next/image';
import One from '../../../public/images/numbers/1.jpg';
import Two from '../../../public/images/numbers/2.jpg';
import Three from '../../../public/images/numbers/3.jpg';
import dot from '../../../public/images/numbers/dot.png';
import NumberBackground from '../../../public/images/numbers/number-bg.png';


const manrope = Manrope({
    weight: ['400', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})
const Number = () => {
    return (
        <>
            <div className="number-section">
                <div className="number-section__relative">
                    <div className="number-section__first-text">
                        <p className='number-section__first-text--upper'>Stockie Operation Across the world</p>
                        <h2>We have best team <br /> and best process</h2>
                        <p className={`number-section__first-text--lower ${manrope.className}`}>Yet bed any for travelling assistance indulgence <br /> unpleasing. Not thoughts all exercise blessing. <br />Indulgence way everything joy.</p>
                        <button>Get Started</button>
                    </div>
                    <div className="number-section__background">
                        <Image className="number-section__background--wave" src={NumberBackground} alt="" />
                        <Image className='number-section__background--first-dot' src={dot} alt="" />
                        <Image className='number-section__background--second-dot' src={dot} alt="" />
                        <Image className='number-section__background--third-dot' src={dot} alt="" />
                        <Image className='number-section__background--one' src={One} alt="" />
                        <Image className='number-section__background--two' src={Two} alt="" />
                        <Image className='number-section__background--three' src={Three} alt="" />
                    </div>

                    <div className={`number-section__text--first ${manrope.className}`}>
                        <h4>Project Discovery cell</h4>
                        <p>Party we years to order allow asked of. <br /> We so opinion friends me message as <br /> delight.</p>
                    </div>

                    <div className={`number-section__text--second ${manrope.className}`}>
                        <h4>Project Discovery cell</h4>
                        <p>His defective nor convinced residence <br /> own. Connection has put impossible <br /> own apartments boisterous.</p>
                    </div>

                    <div className={`number-section__text--third ${manrope.className}`}>
                        <h4>Project Discovery cell</h4>
                        <p>From they fine john he give of rich he. <br /> They age and draw mrs like. Improving  <br />end distrusts may instantly..</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Number;
