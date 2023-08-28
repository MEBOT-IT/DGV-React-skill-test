import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{ backgroundColor: '#333', color: 'green', padding: '20px', textAlign: 'right' }}>
        <Link to="/Login">Login</Link>    
    </nav>

  );
}

export default Nav;
