import { Link } from "react-router-dom";
import React,{useState} from 'react'
import logo from '../Assets/Logo-22.png'
import cart from '../Assets/eco-logo.png'

const Header= () => {
    const [isLoggedIn,setisLoggedIn] = useState(false);
    const handleClick = () => { 
        setisLoggedIn(!isLoggedIn)
        }
    return(
        <div className='header'>
        <nav>
            <div className="header_left">
                <Link to='/'><img src= {logo} alt="Logo_img" className="logo"></img></Link>
            </div>
            <div className="header_middle">
            <ul className="nav-items">

                <li><Link to="/about">About Us</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/'>Contact Us</Link></li>
            </ul>
            </div>
            <div className="header_right">
                <div className="nav_right_items">
                    <button onClick={(handleClick)}>
                        {isLoggedIn ? 'Log out' : 'Log In'}
                    </button>
                    <Link to='/cart'>
                    <img src={cart} alt='cart' className="cart-logo"></img></Link>
                </div>
            </div>
            
        </nav>
        </div>
    );
}

export default Header;