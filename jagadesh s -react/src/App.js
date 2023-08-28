import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./ProductList";

const App=()=>{
  return(
    <div>
      <Header />
      <ProductList id="1" name="pink shirt" img="j_react/images (2526).jpeg" price="$500"/>
      <ProductList id="2" name="Batman" img="j_react/images.jpeg" price="$1000"/>
      <ProductList id="3" name="blue cheched shirt" img="D:\react img\images5262 (2).jpeg" price="$300"/>
      <Footer />
    </div>
  );
}
export default App;