// App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Productdetails from './Productdetails';

const products = [
  {
    id: 1,
    name: 'OverSized T-shirt',
    price: '2000',
    image: 'https://t4.ftcdn.net/jpg/01/67/00/53/360_F_167005359_lKLKXD5NT9rExdPeWrkN0ZMduoOyG5or.jpg', // Replace with actual image path
  },
  {
    id: 2,
    name: 'ball frock',
    price: '3000',
    image: 'https://media.istockphoto.com/id/1359263414/photo/young-man-in-grey-oversize-t-shirt-mockup-front-and-back-used-as-design-template-isolated-on.jpg?s=612x612&w=0&k=20&c=U2JQveJ1ev70FVBfDqHXSrzqmhBxugP-4yjz3X241TM=', // Replace with actual image path
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Home/>
      <Productdetails products={products} /> {/* Pass the products array as props */}
      <Footer/>
      
    </div>
  );
}

export default App;
