import React from 'react';
import './Productlist.css';

const Productlist = ({ products, addToCart,onProductClick}) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product" onClick={() => onProductClick(product)}>
          <img
            src={product.image} 
            alt={product.name} 
            />
          <h3>{product.name}</h3>
          <p>Price: Rs{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Productlist;
