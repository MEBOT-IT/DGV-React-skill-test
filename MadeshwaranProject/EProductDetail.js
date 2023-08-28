import React from 'react'
import { useState } from 'react'
function EProductDetail() {
  const[data,setData]=useState([{pimg: <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aristobrat.in%2Fproducts%2Fclassic-shirt-in-french-blue&psig=AOvVaw042AXhr3DSpFOLQUdK-MUT&ust=1693315125307000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLiS2Ma4_4ADFQAAAAAdAAAAABAE" alt="Jean img"/>,name:"Shirt",size:"L"},
  {pimg: <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myntra.com%2Fblack-jeans&psig=AOvVaw1PwzIoXNLHvKNEccbcUBD9&ust=1693315156239000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPjWqdW4_4ADFQAAAAAdAAAAABAE' alt='Shirt img'/>,name:"Black Jean",size:"XL"},
  {pimg: <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.etsy.com%2Fin-en%2Flisting%2F1168554885%2Fnavy-blue-men-suit-wedding-suit-3-piece&psig=AOvVaw0yxn08MEe90OjAxrJ4vz7H&ust=1693315182143000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIjQy-G4_4ADFQAAAAAdAAAAABAE' alt='Suit img'/>,name:"suit",size:"XL"}])
  return (
    <div>

      <h1><u>Products :</u></h1>
       {data.map((e) => (<p class="product">{e.pimg}Product Name : {e.name} Size : {e.size} <button>Add to Cart</button></p>))}
       

      </div>
  )
}

export default EProductDetail