import React, { useState } from "react";
import "./Cart.css";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeCartItem = (index) => {
    const newCartItems = cartItems.filter((i) => i !== index);
    setCartItems(newCartItems);
  };
  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p className="cart2">Your Amazon Cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}{" "}
              <button onClick={() => removeCartItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
