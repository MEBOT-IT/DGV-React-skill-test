// Header.js
import React from 'react';
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        
        <h1>Difa E-commerce Store</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="cart">
        <span>Cart</span>
        {/* Add a cart icon or badge here */}
      </div>
    </header>
  );
}

export default Header;
