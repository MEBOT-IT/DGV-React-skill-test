import React from 'react';
import HeaderNav from './HeaderNav';
import Home from './Home';
import Footer from './Footer';
import ProductDetails from './ProductDetails';

const App = () => {
  return (
    <div className="App">
      <HeaderNav />
      <Home />
      <ProductDetails/>
      <Footer />
    </div>
  );
};

export default App;
