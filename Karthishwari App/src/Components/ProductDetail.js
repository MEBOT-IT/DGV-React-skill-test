import React from 'react';
// import './Products.css'; 
import headphone2 from '../Assets/headphone-06.jpg'
import Header from './Header';

const product = {
  name: 'Product 1',
  price: '₹990',
  description: 'Lorem ipsum jdhbs habjkah hsdinnnl',
};

function ProductDetail() {
  return (
    <div>
        <Header/>
        <div className="product-detail">
            <div className="product-image">
                <img src={headphone2} alt={product.name} />
            </div>
            <div className="product-info">
                <h1>{product.name}</h1>
                <p className="price">{product.price}</p>
                <p className="description">{product.description}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    </div>
  );
}

export default ProductDetail;
