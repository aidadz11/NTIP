import React from 'react'
import './Header.css'

const Header = () => {
  const handleOrderClick = () => {
    window.location.href = 'http://localhost:5173/#explore-menu';
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Dobrodošli u našu cvjećaru!</h2>
        <p>Bilo da tražite savršeni buket za posebnu prigodu, želite uljepšati svoj dom ili iznenaditi voljenu osobu, naša cvjećara nudi širok izbor prekrasnih cvjetova i aranžmana. S ljubavlju odabrani i pažljivo složeni, naši cvjetovi donose radost i eleganciju u svaki prostor!</p>
        <button onClick={handleOrderClick}>Order here</button>
      </div>
    </div>
  )
}

export default Header
