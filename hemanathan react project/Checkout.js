import React, { useState } from 'react';

function Checkout({ cartItems }) {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform checkout logic here
    console.log('Checkout successful!');
    console.log('Full Name:', fullName);
    console.log('Address:', address);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <h3>Selected Items:</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
}

export default Checkout;