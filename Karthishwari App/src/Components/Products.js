import React from 'react'
import Header from './Header'
import Card from './ProductCard'
import airpod1 from '../Assets/airpods-01.jpg'
import handbag1 from '../Assets/handbag-01.jpg'
import handbag2 from '../Assets/handbag-02.jpg'
import handbag3 from '../Assets/handbag-03.jpg'
import handbag7 from '../Assets/handbag-07.jpg'
import handbag9 from '../Assets/handbag-09.jpg'
import headphone2 from '../Assets/headphone-06.jpg'
import phone1 from '../Assets/phone-01.jpg'
import phone1_png from '../Assets/phone1-png.png'
import phone2_png from '../Assets/phone2-png.png'
import speaker1 from '../Assets/speaker-01.jpg'
import sunglass2 from '../Assets/sunglass-03.jpg'
import './Products.css'

function Products() {
  return (
    <div>
      <Header/>
      {/* Cool Gadgets.  */}
      <div>
        <div className='category_heading' style={{width: 500}}>
            <h1>Cool Gadgets</h1>
        </div>
        
        <div className="row">
            <Card
            title="Product 1"
            images={speaker1}
            old_price="9,999"
            newPrice="9999"
            dollar="₹"
            alt="product-1"
            />
            <Card
            title="Product 2"
            images={headphone2}
            old_price="599"
            newPrice="500"
            dollar="₹"
            alt="product-2"
            />
            <Card
            title="Product 3"
            images={phone2_png}
            old_price="7999"
            newPrice="7000"
            dollar="₹"
            alt="product-3"
            />
            <Card
            title="Product 4"
            images={airpod1}
            old_price="999"
            newPrice="500"
            dollar="₹"
            alt="product-4"
            />
        </div>
      </div>
      {/* sofa */}
      <div>
        <div className='category_heading'>
            <h1>Handbags</h1>
        </div>
        <div className="row">
            <Card
            title="Product 1"
            images={handbag2}
            old_price="9,999"
            newPrice="9999"
            dollar="₹"
            alt="product-1"
            />
            <Card
            title="Product 2"
            images={handbag3}
            old_price="599"
            newPrice="500"
            dollar="₹"
            alt="product-2"
            />
            <Card
            title="Product 3"
            images={handbag9}
            old_price="7999"
            newPrice="7000"
            dollar="₹"
            alt="product-3"
            />
            <Card
            title="Product 4"
            images={handbag1}
            old_price="999"
            newPrice="500"
            dollar="$"
            alt="product-4"
            />
        </div>
      </div>
    </div>
  )
}

export default Products
