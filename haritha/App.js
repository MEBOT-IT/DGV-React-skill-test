import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart'
import Header from './Header'
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: 20,
    image: 'product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: 30,
    image: 'product2.jpg',
  },
  // Add more products as needed
];

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = productId => {
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
  };

  return (
    <div className="app">
      <h1>ECommerce Store</h1>
      <ProductList products={products} onProductClick={handleProductClick} />
      {selectedProduct && <ProductDetails product={selectedProduct} />}
      <Cart/>
        <Prods/>
        <Header/>
        <ProductList/>
        <ProductDetails/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
