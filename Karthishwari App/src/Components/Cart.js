import React from 'react'
import headphone2 from '../Assets/headphone-06.jpg'
import gift1 from '../Assets/gift-01.jpg'
import './Products.css'
import Header from './Header'

function Cart() {
  return (
    <div>
        <Header/>
        <div class="final_cart">
            <h1>Cart</h1>
            <div class="product-grid">
                <div class="product">
                    <div class="product-img">
                    <img src={headphone2} alt='image' width='250px' height='250px'/>
                    </div>

                    <div class="product-info">
                        <h3 class="product-name">Product 1</h3>

                        <h4 class="product-price">₹ 1200</h4>

                        <p class="product-quantity">
                            Quantity: 1
                        </p>
                        <div class="product-remove">
                            <button type="submit" href="#">
                                -
                            </button>
                        </div>
                    </div>
                </div>

                <div class="product">
                    <div class="product-img">
                        <img src={gift1} alt='image' width='250px' height='250px'/>
                    </div>

                    <div class="product-info">
                        <h3 class="product-name">Product 2</h3>

                        <h4 class="product-price">₹ 900 </h4>

                        <p class="product-quantity">
                            Quantity: 1
                        </p>
                        <div class="product-remove">
                            <button type="submit" href="#">
                                -
                            </button>
                            
                        </div>
                    </div>
                </div>

            </div>

            <div class="cart-total">
                <div class="total">
                    <p>Total Price: ₹ 2000</p>
                    
                </div>

                <div class="items-num">
                    <p>No. of Items: 2</p>
                    
                </div>

                <div class="order-btn">
                    <input type="button" href="Home.html" value="Place Order"></input>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart;
