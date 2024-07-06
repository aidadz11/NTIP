import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const handleLogoClick = () => {
    window.location.href = 'http://localhost:5173/';
  };

  return (
    <div className='navbar'>
      <img 
        className="logo" 
        src={assets.logo} 
        alt="" 
        style={{ width: '65px', height: 'auto', cursor: 'pointer' }} 
        onClick={handleLogoClick}
      />
      <img 
        className="profile" 
        src={assets.profile} 
        alt="" 
        style={{ width: '55px', height: 'auto' }} 
      />
    </div>
  );
};

export default Navbar;
