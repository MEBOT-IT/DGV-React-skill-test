import React from 'react'
import {Link} from 'react-router-dom'
import style from "../src/Components/Css/nav.module.css"
function Nav() {
  return (
    <>
      
        <Link className={style.item} to="/">Home</Link>
        <Link className={style.item} to="/Productdetails">Products</Link>
        <Link className={style.item} to="/cart">Cart</Link>
        <Link className={style.item} to="/account">My Account</Link>
      
    </>
  )
}

export default Nav