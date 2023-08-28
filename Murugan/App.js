import React from "react";
import CheckOut from "./CheckOut";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import ProjectproductDetails from "./Projectproductdetails";
import Input from "./Input";
import New from "./New";
function App() {
  return (
    <div>
      <Input />
      <New />
      <Header />
      <Footer />
      <Cart />
      <CheckOut />
      <ProjectproductDetails />
    </div>
  );
}

export default App;
