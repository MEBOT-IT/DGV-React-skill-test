// App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Productdetails from './Productdetails';

const products = [
  {
    id: 1,
    name: 'Short frock',
    price: '2000',
    image: 'https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png', // Replace with actual image path
  },
  {
    id: 2,
    name: 'ball frock',
    price: '3000',
    image: 'https://img.freepik.com/free-photo/curly-girl-beautiful-dress_144627-10112.jpg', // Replace with actual image path
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
