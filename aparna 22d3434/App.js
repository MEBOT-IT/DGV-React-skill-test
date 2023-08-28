import React from "react";
import Navbar from "./Component/Navbar";
import Product from "./Component/product";
import Footer from "./Component/Footer";
import Cart from "./Component/Cart";



function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Cart />
      </div>
      <div>
        <Product />
      </div>
      <div>
        <Footer />
      </div>

    </div>


  );
}

export default App;
