import './App.css';
import { Route,Routes } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='about' element={ <About/> }/>
        <Route path='products' element={ <Products/> }/>
        <Route path='productdetail' element={<ProductDetail/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
