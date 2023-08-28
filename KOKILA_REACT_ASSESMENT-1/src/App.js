
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Header from './Header';
import Productdetails from './Productdetails';
import Footer from './Footer';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/Productdetails" exact element={<Productdetails/>}/>
   </Routes>
   <Footer/>
    </Router>
  );
}

export default App;
