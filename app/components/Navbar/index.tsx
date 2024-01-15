import Link from 'next/link';
import Button from '@/app/components/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import './index.scss'

interface NavbarProps {
  manrope: any;
  links: { href: string; label: string }[];
  signInLink: string;
}

const Navbar: React.FC<NavbarProps> = ({ manrope, links, signInLink }) => {
  const [buttonEffect, setButtonEffect] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleButtonClick = () => {
    setButtonEffect(true);
  };

  const handleToggleClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header>
      <div className="navbar">
        <div className="navbar__logo">
          <Link href="/">AR Shakir</Link>
        </div>
        <div className="navbar__middle">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className={`navbar__link ${manrope.className}`}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="navbar__right">
          <Link href={signInLink} className="navbar__right--sign-in">
            Sign In
          </Link>
          <Button
            className={`navbar__button ${manrope.className}`}
            text="Start Free"
            clickEvent={handleButtonClick}
          />
        </div>
        <div className="navbar__toogle-btn" onClick={handleToggleClick}>
          <GiHamburgerMenu size={24} />
        </div>
      </div>
      {dropdownVisible && (
        <div className="dropdown-menu">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className={`dropdown-menu__link ${manrope.className}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/" className="dropdown-menu__link">
            Sign In
          </Link>
          <Button
            className={`dropdown-menu__button ${manrope.className}`}
            text="Start Free"
            clickEvent={handleButtonClick}
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
