import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, addToCart }) => {
  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p id='price'>Price: Rs{product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
