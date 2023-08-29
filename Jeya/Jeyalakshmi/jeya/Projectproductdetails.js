// ProductDetails.js
import React from 'react';
import Tuxedo from "./T3.png"

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <img src={Tuxedo} alt="tuxedo" />
      <h2>Women's top</h2>
      <p>A elegant and pleasent top for any occasion, bright color and comfortable to wear.</p>
      <p>Price: 1499 rs</p>
      <button id='b1'>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;

