import React from 'react';

interface ContentBlockProps {
    smallParagraph: string;
    h1Text: string;
    twoLineParagraph: string;
    button1Text: string;
    button2Text: string;
    button1LogoPath?: string;
    button2LogoPath?: string;
}

const DownloadBlock: React.FC<ContentBlockProps> = ({
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
            <h1 className="download-block__h1">{h1Text}</h1>
            <p className="download-block__two-line-paragraph">{twoLineParagraph}</p>
            <div className="download-block__buttons">
                <button className="custom-content-block__button">
                    {button1LogoPath && <img src={button1LogoPath} alt="Button 1 Logo" className="custom-content-block__button-logo" />}
                    {button1Text}
                </button>
                <button className="custom-content-block__button">
                    {button2LogoPath && <img src={button2LogoPath} alt="Button 2 Logo" className="custom-content-block__button-logo" />}
                    {button2Text}
                </button>
            </div>
        </div>
    );
};

export default DownloadBlock;
