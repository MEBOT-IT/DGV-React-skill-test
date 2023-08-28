import React from "react";
import "../Style/product.css";
import img1 from "../images/c1.jpeg";
import img2 from "../images/c2.jpeg";
import img3 from "../images/c3.jpeg";
import img4 from "../images/c4.jpeg";
import img5 from "../images/c5.jpeg";
import img6 from "../images/c6.jpeg";


function product() {

    return (
        <div className="image">
            <div className="i">
            <>
                <div className="i1" id="ia">
                    <img src={img1}></img>
                    <p>price:$100</p>
                </div>
                <div className="i2" id="ia">
                    <img src={img2}></img>
                    <p>price:$35</p>
                </div>
                <div className="i3" id="ia">
                    <img src={img3}></img>
                    <p>price:$45</p>
                </div>
                <div className="i4" id="ia">
                    <img src={img4}></img>
                    <p>price:$55</p>
                </div>
                <div className="i5" id="ia">
                    <img src={img5}></img>
                    <p>price:$65</p>
                </div>
                <div className="i6" id="ia">
                    <img src={img6}></img>
                    <p>price:$78</p>
                </div>


            </>
            </div>
        </div>

    );
}
export default product;