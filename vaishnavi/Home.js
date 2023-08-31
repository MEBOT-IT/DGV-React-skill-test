import React from 'react';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component
import './Home.css'; // Import your CSS for styling

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: '20rs',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: '50rs',
      
    },
   ];
return (
    <div className="home">
      <h2>Welcome to  RANVI </h2>
      
    </div>
  );
};

export default Home;
