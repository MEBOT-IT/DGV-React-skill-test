import React from 'react';
import './Header.css'; 
function Header() {
  return (
    <header className="header">
      <div className="log">Express Trendy</div>
      <nav className="nav">
        <ul>
          <li><a href="/">login</a></li>
          <li><a href="/products">Productlist</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;