import React from 'react'
import addvid from "./app.mp4";
import Styles from './Home.module.css'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
    <div className={Styles.banner}>
        
        <div className={Styles.container}>
          <div className={Styles.details}>
            <h1>The Best Kurta collection 2023</h1>
            <Link to="/Product" className={Styles.link}>Shop Now</Link>
           
          </div>
          <div className={Styles.ban_img}>
          <video autoPlay loop muted>
              <source src={addvid} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home