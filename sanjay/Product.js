import React from "react";
import "./Product.css";
const Product = () => {
  return (
    <div className="details">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aoiSv_Ju2BbPQg3SeR_OPBj2RTB31LGPMw&usqp=CAU"
        className="shirt"
      />
      <h2 className="hh">T-Shirt</h2>
      <p className="ppp">
        A Man's t-shirt for semiformal evening dress, traditionally of black or
        dark-blue color and characteristically having satin or grosgrain facing
        on the lapels
      </p>
      <p className="price">Price: 500 rs</p>
      <button className="btnn">Add to Cart</button>
    </div>
  );
};

export default Product;