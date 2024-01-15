import React from 'react';
import "./index.scss";




interface ContentBlockProps {
    manrope: any;
    smallParagraph: string;
    h1Text: string;
    twoLineParagraph: string;
    button1Text: string;
    button2Text: string;
    button1LogoPath?: string;
    button2LogoPath?: string;
}

const DownloadBlock: React.FC<ContentBlockProps> = ({
    manrope,
    smallParagraph,
    h1Text,
    twoLineParagraph,
    button1Text,
    button2Text,
    button1LogoPath,
    button2LogoPath

}) => {
    return (
        <div className="download-block">
            <p className="download-block__small-paragraph">{smallParagraph}</p>
            <h1 className={`download-block__h1 ${manrope.className}`}>{h1Text}</h1>
            <p className={`download-block__two-line-paragraph ${manrope.className}`}>{twoLineParagraph}</p>
            <div className="download-block__buttons">
                <button className={`download-block__button ${manrope.className}`}>
                    {button1LogoPath && <img src={button1LogoPath} alt="Button 1 Logo" className="download-block__button-logo" />}
                    {button1Text}
                </button>
                <button className={`download-block__button--dark ${manrope.className}`}>
                    {button2LogoPath && <img src={button2LogoPath} alt="Button 2 Logo" className="download-block__button-logo" />}
                    {button2Text}
                </button>
            </div>
        </div>
    );
};

export default DownloadBlock;
