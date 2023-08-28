import React from "react";
import "./Header.css";
const Header=()=>{
    return(
      <div>
        <header className="header">
          <img src="" className="img"></img>
        <h1 className="title">Amazon E-Commerce</h1>
        <nav className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
        </header>
      </div>
    );
  }
  export default Header;