import React from 'react'

export const Product = (props) => {
    const { id, productname, price, productImage } = props.data;
    return (
    <div className="product">
        <img src={productImage} />
        <div className="description">
            <p><b>{productname}</b></p>
            <p><b>Rs. {price}</b></p>
        </div>
        <button className="addToCartBttn">Add To Cart</button>
    </div>
  );
};
