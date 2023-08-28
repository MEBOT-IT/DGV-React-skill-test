import React from 'react'
import style from "../src/Components/Css/nav.module.css"
import {Link} from 'react-router-dom'
import p1 from '../src/Components/images/81rJY++w1XL._UX679_.jpg'
import p2 from '../src/Components/images/61-9KzgxE0L._UX679_.jpg'
import p3 from '../src/Components/images/71Hg5yHDk1L._UX679_.jpg'
import p4 from '../src/Components/images/51XNxvRP7fL._UY879_.jpg'
import p5 from '../src/Components/images/71seHOCQToL._UY879_.jpg'

function Productdetails() {
  return (
    <div>Productdetails
        <section className="product-list">
        <div className="product">
          <img src={p1} alt="Product 1" className={style.pics}/>
          <h2>Product 1</h2>
          <p>Dress material</p>
          <Link to="/Productdetails">shop now</Link>
        </div>
        <div className="product">
          <img src={p2} alt="Product 2" className={style.pics} />
          <h2>Product 2</h2>
          <p>jeans</p>
          <Link to="/Productdetails">shop now</Link>
        </div>
        <div className="product">
          <img src={p3} alt="Product 3" className={style.pics} />
          <h2>Product 3</h2>
          <p>kurtha's</p>
          <Link to="/Productdetails">shop now</Link>
        </div>
        <div className="product">
          <img src={p4} alt="Product 4" className={style.pics} />
          <h2>Product 4</h2>
          <p>sarees</p>
          <Link to="/Productdetails">shop now</Link>
        </div>
        <div className="product">
          <img src={p5} alt="Product 5" className={style.pics} />
          <h2>Product 5</h2>
          <p>tops</p>
          <Link to="/Productdetails">shop now</Link>
        </div>
        {/* Add more products */}
      </section>
    </div>
 
  )
}

export default Productdetails