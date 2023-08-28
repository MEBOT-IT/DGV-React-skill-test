import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Nav from './Nav';


function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
      <Route path='/Login' exact element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
