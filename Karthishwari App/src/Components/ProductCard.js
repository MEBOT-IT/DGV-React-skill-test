import React from 'react'
import cart_icon from '../Assets/cart-icon.png'
import heart_icon from '../Assets/icon-heart.png'
import './Products.css'
import { Link } from 'react-router-dom'

function Card(props) {
    let { title, old_price, newPrice, dollar, exp_date, images } = props
    return (

        <div className="card">
            <div className="wrapper">
                <div className="card_img">
                    <Link to='/productdetail'><img src={images}></img></Link>
                </div>
                <div className="heart">
                    <img src={heart_icon}>
                    </img> 
                </div>
                <div className="cardInfo">
                    <h1>{title}</h1>
                    <div className="price_deatil_cart">
                        <div className="priceGroup">
                            <p className="price newPrice">{dollar}{newPrice}</p>
                        </div>
                        <div className="cart">
                            <img className="outCart" src={cart_icon} >
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;