import React from 'react'
import Nav from './Nav'
import style from '../src/Components/Css/nav.module.css'
import logo from '../src/Components/images/store-4156934_1280.webp'
function Header() {
  return (
    <div className={style.items}>
    <img src={logo} className={style.logoo}/>
      <Nav/>
    </div>

  )
}

export default Header