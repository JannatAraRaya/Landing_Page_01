'use client'
import React, { useState } from 'react';
import './index.scss'; 

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">AR SHAKIR</div>
      <div className={`navbar__nav-item navbar__dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        Products
        <div
          dangerouslySetInnerHTML={{ __html: '' }}
          className="navbar__dropdown-icon"
        ></div>
        {isDropdownOpen && (
          <div className="navbar__dropdown-content">
            <div className="navbar__dropdown-option">Option 1</div>
            <div className="navbar__dropdown-option">Option 2</div>
            <div className="navbar__dropdown-option">Option 3</div>
          </div>
        )}
      </div>

      <div className="navbar__nav-item">Template</div>
      <div className="navbar__nav-item">Blog</div>
      <div className="navbar__nav-item">Pricing</div>
    </div>
  );
};

export default Navbar;
