import { useState } from 'react';
import Productlist from './Productlist';
import Header from './Header';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import {Routes,Route} from 'react-router-dom';
 
function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Decorative flowers in pink vase',
      price: 899,
      image: 'images/flowervase.jpg',
      description:'A decorative flower in a vase adds a touch of natures beauty, bringing vibrant colors and elegant simplicity to any space. It is a charming and easy way to brighten up your surroundings.' 
    },
    {
      id: 2,
      name: 'Heart shaped rose',
      price: 1349,
      image: 'images/heart rose.jpg',
      description:'A heart-shaped rose conveys love and affection through its natural elegance, symbolizing heartfelt emotions in a single bloom. It is a romantic gesture that speaks volumes in its simplicity.'
    },
    {
      id: 3,
      name: 'Purple Orchid Bouquet',
      price: 900,
      image: 'images/purple orchid.png', 
      description:'A purple orchid bouquet exudes sophistication and grace with its vibrant, exotic blooms, making it a striking and memorable gift choice. Its deep purple hues convey a sense of mystery and admiration.'
    },
  ];
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />}/>
      </Routes>
      <Productlist products={products} addToCart={addToCart} onProductClick={handleProductSelect}/>
      {selectedProduct && (
          <ProductDetail product={selectedProduct} addToCart={addToCart} />
        )}
    </div>

  );
}

export default App;
