import { Manrope } from "next/font/google";
import './index.scss'
import DownloadBlock from "@/app/components/Download";

const manrope = Manrope({
    weight: ["400", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
});

export default function DownloadSection() {
    const Props = {
        smallParagraph: 'Project Management App',
        h1Text: 'Download our app and start your free trail to get started today!',
        twoLineParagraph: 'End-to-end payments and financial management in a single solution.',
        button1Text: 'Playstore',
        button2Text: 'Google Play',
        button1LogoPath: "/images/downloadLogo/apple-logo.svg",
        button2LogoPath: "/images/downloadLogo/google-play.svg",
    };


    return (
        <>
            <div className="download-section">
                <div className="download-section__wrapper">
                    <DownloadBlock {...Props} />

                </div>
            </div>
        </>
    )
}