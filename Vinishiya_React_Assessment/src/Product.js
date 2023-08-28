import React, { useState } from 'react'
import ProductItem from './ProductItem'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import Styles from './Product.module.css'
import { BsEye } from 'react-icons/bs';


function Product() {
  const[prod,setProd]=useState(ProductItem)
  return (
    <>
    <div className={Styles.min_product}>
      <div className={Styles.container}>
      {
    prod.map((cur)=>
    {
      return(
       
        <div className={Styles.box} key={cur.id}>
          <div className={Styles.img_box}>
            <img src={cur.img}/>
            
            <div className={Styles.icon}>
              <li><AiOutlineShoppingCart/></li>
              <li><BsEye/></li>
              <li><AiOutlineHeart/></li>
              
              
              
            </div>
          </div>
          <div className={Styles.details}>
            <p>{cur.cat}</p>
            <h3>{cur.title}</h3>
            <h4>{cur.Price}</h4>

          </div>

        </div>
      
      )
    })
  }

        
      </div>
    </div>
    </>
  )
}

export default Product