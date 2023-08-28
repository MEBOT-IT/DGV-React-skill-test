import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price} USD</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
