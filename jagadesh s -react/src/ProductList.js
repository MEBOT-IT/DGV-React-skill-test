import React from "react";
 const ProductList=({id,name,price,img})=>{
    return(
        <div className="product-list">
                <p>{id}</p>
                    <img src={img} alt={name}/>
                    <h2>{name}</h2>
                    <p>{price}</p>
                    <button>Add cart</button>
                    </div>
    );
 }

 export default ProductList;