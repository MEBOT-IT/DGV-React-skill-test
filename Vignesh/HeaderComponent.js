import React from 'react';
import './HeaderComponent.css'; 

const HeaderComponent = () => {
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

export default HeaderComponent;
