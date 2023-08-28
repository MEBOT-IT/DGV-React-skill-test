import EFooter from './EFooter';
import EHeader from './EHeader';
import ENavigation from './ENavigation';
import EProductDetail from './EProductDetail';
import Home from './Home';
function App() {
  return (
    <div>
      <div className="top">
      <EHeader/>
      <ENavigation/></div>
      <Home/>
      <EProductDetail/>
      <EFooter/>
    </div>
  );
}

export default App;
