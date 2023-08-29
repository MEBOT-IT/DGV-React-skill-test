import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import './HeaderNav.css'; // Import your CSS for styling

const HeaderNav = () => {
  return (
    <header className="header-nav">
      <nav className="navigation">
        <div className="logo">
          <Link to="/RANVI">RANVI</Link>
        </div>
        <ul className="menu">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/ProductDetails">ProductDetails</Link></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
