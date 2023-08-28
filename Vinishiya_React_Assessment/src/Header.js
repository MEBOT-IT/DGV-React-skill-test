import React from 'react'
import Styles from './Header.module.css'
import logo from './Weshow.jpg'
function Header() {
  return (
    <div>
        <header className={Styles.header_container}>
        <img src={logo}/>

      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Product">Product</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
     
    </header>
    </div>
  )
}

export default Header