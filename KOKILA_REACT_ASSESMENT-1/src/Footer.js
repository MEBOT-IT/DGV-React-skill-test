import React from 'react'
import style from '../src/Components/Css/nav.module.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.firstline}>
        <div className={style.box1}>
         
        
            <div className={style.box2}>
              <h3>Explore </h3>
              <li><Link className={style.lists} to='/Aboutus'> About us</Link> </li>
              <li ><Link className={style.lists} to='/Faq'> Help & FAQs</Link> </li>
              <li ><Link className={style.lists} to='/Howworks'> How it works?</Link> </li>
              
            </div>
            <div className={style.box3}>
              <h3>Our links </h3>
              <li ><Link className={style.lists} to='/Contact'> Contact us</Link> </li> 
              <li ><Link  className={style.lists} to='/Careers'> Careers</Link> </li>
              <li ><Link className={style.lists} to='/Locate'> Locate Store</Link> </li>
            </div>
          <div className={style.icon}>
              <h3>Follow us on</h3>
              <div className={style.social}>
                <div className={style.log} >
                  <BsFacebook/>
                </div>
                 <div className={style.log}>
                  <AiFillInstagram/>
                </div>
                <div className={style.log}>
                  <BsTwitter/>
                </div>
                <div className={style.log}>
                  <IoLogoWhatsapp/>
                </div>
              </div></div>
               
      </div>
        </div>
          <div className={style.lastline}>
            <li className={style.lii}> Terms and Conditions </li>
            <li className={style.lii}> || Our Privacy Policy  </li>
            <li className={style.lii}> || Shipping Details  </li>
            <li className={style.lii}> || Refund Policy </li>
          </div>
    </div>
  )
}

export default Footer