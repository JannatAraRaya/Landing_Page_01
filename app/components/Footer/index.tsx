import React from 'react'
import Image from 'next/image';
import linkedIn from '../../../public/images/footerLogos/linkedIn.svg';
import messenger from '../../../public/images/footerLogos/messenger.svg';
import twitter from '../../../public/images/footerLogos/twitter.svg';
import twoo from '../../../public/images/footerLogos/twoo.svg';

import './index.scss'

const FooterSection = () => {
    return (
        <>
            <div className="footer">
                <div className="footer__sub-section">
                    <div className="footer__sub-section__links">
                        <div className="footer__sub-section__links__div">
                            <h4 className="footer__sub-section__links__div--logo">AR Shakir</h4>
                            <p className="footer__sub-section__links__div--simple-text">Simple innate summer fat <br /> appear basket his desire joy.</p>
                            <div className="footer__sub-section__links__div__socialmedia">
                                <p><Image src={linkedIn} alt="" /></p>
                                <p><Image src={messenger} alt="" /></p>
                                <p><Image src={twitter} alt="" /></p>
                                <p><Image src={twoo} alt="" /></p>
                            </div>
                        </div>
                        <div className="footer__sub-section__links__div">
                            <h4>Company</h4>
                            <div className="footer__sub-section__links__div__p">
                                <a href="/">
                                    <p>About us</p>
                                </a>
                                <a href="/">
                                    <p>Careers</p>
                                </a>
                                <a href="/">
                                    <p>Blog</p>
                                </a>
                                <a href="/">
                                    <p>Pricing</p>
                                </a>
                            </div>
                        </div>

                        <div className="footer__sub-section__links__div">
                            <h4>Resources</h4>
                            <div className="footer__sub-section__links__div__p">
                                <a href="/">
                                    <p>Templates</p>
                                </a>
                                <a href="/">
                                    <p>Tutorials</p>
                                </a>
                                <a href="/">
                                    <p>Free resources</p>
                                </a>
                                <a href="/">
                                    <p>Contract templates</p>
                                </a>
                            </div>
                        </div>
                        <div className="footer__sub-section__links__div">
                            <h4>Join Our Newsletter</h4>
                            <div className="footer__sub-section__links__div--input-button">
                                <input type="text" placeholder='Your email address' className='footer__sub-section__links__div--input' />
                                <button className='footer__sub-section__links__div--button'>Subscription</button>
                            </div>
                            <p className="footer__sub-section__links__div--simple-text">* Will send you weekly updates for your better finance management.</p>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="footer__sub-section__below">
                        <div className="footer__sub-section__below__copyright">
                            <p>Copyright @ AR Shakir 2022. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterSection;

