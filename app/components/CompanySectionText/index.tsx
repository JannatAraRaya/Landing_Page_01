import { Manrope } from 'next/font/google'
import './index.scss';

const manrope = Manrope({
    weight: ["400", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
});
const ComapanyText = () => {
    return (
        <div className={`centered-Text ${manrope.className}`}>
            Over 32k+ software businesses growing with AR Shakir
        </div>

    );
};

export default ComapanyText;
