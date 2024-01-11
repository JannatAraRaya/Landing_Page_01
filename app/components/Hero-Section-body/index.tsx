import './index.scss';

const HeroSectionBody= () => {
    return (
        <div className="hero-section-wrapper">
            <div className='hero-section-wrapper__text'>
                <p className='hero-section-wrapper__text--first-para'>Product Growth Solution in Single Platform.</p>
                <p className='hero-section-wrapper__text--middle'> Managing business payments has never 
                                                                    <br /> been easier</p>
                <p className='hero-section-wrapper__text--last-para'>Never at water me might. On formed merits hunted <br /> unable merely 
                by mr whence or. Possession the unpleasing simplicity <br /> her uncommonly.</p>
            <div className='hero-section-wrapper_email-sender'>
                <div>
                    <p  className='hero-section-wrapper_email-sender--normal-text'>Register using email address</p>
                    <p className='hero-section-wrapper_email-sender--bold-text'>shakir260@gmail.com</p>
                </div>
                <div >
                    <button className='hero-section-wrapper_email-sender--button'>Submit</button>
                </div>
            </div>
            </div>
            <div className="hero-section-wrapper__image"></div>
        </div>

    );
};

export default HeroSectionBody;
