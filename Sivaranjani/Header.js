import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
            </ul>
        </nav>
        <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button type="button">Search</button>
      </div>
      <div className="user-account">
        <button type="button">Login</button>
      </div>
      </header>
    </div>
  )
}

export default Header;
