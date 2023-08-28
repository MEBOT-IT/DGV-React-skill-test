import React from 'react';
import './Cart.css'

  const Cart = ({ cart, removeFromCart }) => {
    const calculateTotal = () => {
      return cart.reduce((total, item) => total + item.price, 0);
    };
  

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">Rs{item.price}</span>
                <button
                  className="remove-from-cart-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="total">Total: Rs{calculateTotal().toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

export default Cart;
