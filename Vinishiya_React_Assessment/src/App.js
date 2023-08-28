import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Footer from "./Footer";
import Product from "./Product";


function App() {
  return (
   <>
   <Router>
   <Header/>
   <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path="/Product" exact element={<Product/>}/>

   </Routes>
   <Footer/>

   </Router>
   
   
   </>
  );
}

export default App;
