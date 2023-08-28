import React from 'react';
import './ProductListAndProductDetial.css'; // Import the CSS file for styling

const ProductListAndProductDetial = () => {
  const products = [
    { id: 1, name: 'Tshirt', price: 19.99, image: 'Tshirt.jpeg' },
    { id: 2, name: 'Pant', price: 29.99, image: 'Pant.jpeg' },
    { id: 3, name: 'Shoe', price: 9.99, image: 'Shoe.jpeg' },
    // ... more products
  ];

  const handleAddToCart = product => {
    // Implement your logic to add the product to the cart
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="product-list">
      <h2>Product List And Details</h2>
      <ul className="products">
        {products.map(product => (
          <li key={product.id} className="product">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListAndProductDetial;
