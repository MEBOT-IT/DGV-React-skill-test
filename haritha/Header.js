import React from 'react';
import './Header.css'; // Import 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">E-Commerce App</div>
      <nav>
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;