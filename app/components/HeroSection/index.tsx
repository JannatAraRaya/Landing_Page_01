import { Manrope } from 'next/font/google'
import Image from 'next/image';
import HeroSectionBg from '../../../public/images/hero-img.png';
import './index.scss';
interface HeroSectionProps {
    title: string;
    subtitle: string;
    description: string;
    email: string;
    buttonText: string;
    fontClass: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle,
    description,
    email,
    buttonText,
    fontClass,
}) => {
    return (
        <div className="hero-section">
            <div className="hero-section-wrapper">
                <div className="hero-section-wrapper__text">
                    <p className="hero-section-wrapper__text--first-para">{title}</p>
                    <p className={`hero-section-wrapper__text--middle ${fontClass}`}>{subtitle}</p>
                    <p className="hero-section-wrapper__text--last-para">{description}</p>
                    <div className="hero-section-wrapper_email-sender">
                        <div>
                            <p className="hero-section-wrapper_email-sender--normal-text">Register using email address</p>
                            <p className="hero-section-wrapper_email-sender--bold-text">
                                <b>{email}</b>
                            </p>
                        </div>
                        <div>
                            <button className="hero-section-wrapper_email-sender--button">{buttonText}</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image className="hero-section-wrapper__image" src={HeroSectionBg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

