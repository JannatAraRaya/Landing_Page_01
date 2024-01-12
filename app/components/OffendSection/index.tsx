import './index.scss';
import { Manrope } from 'next/font/google'
import Image from 'next/image';


const manrope = Manrope({
    weight: ['400', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})
const Offened = () => {
    return (
        <>
            <div className="offened-section">
                <div className="offened-section__container">
                   
                </div>
            </div>
        </>
    );
};

export default Offened;
