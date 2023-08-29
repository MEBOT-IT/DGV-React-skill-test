import React from 'react';
import './ProductDetails.css'; 
const ProductDetails = () => {
  const product = {
    name: 'shirt',
    description: 'pure cotton ',
    price: '100',
    
  };

  const addToCart = () => {
    
    alert('Product added to cart!');
  };

  return (
    <div className="product-details">
      <h1 className="product-name">{product.name}</h1>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price}</p>
      <button className="add-to-cart" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
