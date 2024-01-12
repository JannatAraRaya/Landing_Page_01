import {Manrope } from 'next/font/google'
import Link from "next/link";
import './index.scss'; 
import Button from '../Button';

const manrope =Manrope ({  
  weight: ['400', '600','700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',})

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">AR SHAKIR</div>
      <div className="navbar__item">
        <Link href="/" className={`navbar__link ${manrope.className}`}>Product</Link>
        <Link href="/" className={`navbar__link ${manrope.className}`}>Template</Link>     
        <Link href="/" className={`navbar__link ${manrope.className}`}>Blog</Link>     
        <Link href="/" className={`navbar__link ${manrope.className}`}>Pricing</Link>     
      </div>
      <div className ="navbar__button">
        <Link href="/" className={`navbar__button navbar__button--signIn ${manrope.className}`}>Sign In</Link>
        <Button className={`navbar__button navbar__button--startFree ${manrope.className}`} text="Start Free" />
      </div>
    </div>
  );
};

export default Navbar;
