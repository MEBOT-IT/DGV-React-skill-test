import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (

    <div className="home-container">
      <header>
        <h1>Welcome to Our eCommerce Store</h1>
        <p>Explore our wide range of products</p>
        <button ><Link to ='/Productdetails'>explore</Link></button>
      </header>
    
</div>
  )
}

export default Home