import React, { useState } from "react";
import "./CheckOut.css";
const CheckOut = () => {
  var [info, setIndo] = useState("");

  return (
    <div>
      <div className="name">
        <h1>Help and Customer service</h1>

        <ul>
          <li> Placing Orders</li>
          <li> Ordering with Amazon - FAQ</li>
          <li> Searching and Browsing for Items</li>
          <li> Proceed to Checkout</li>
          <li> Availability Message Definitions</li>
          <li> Install or Uninstall Amazon Assistant</li>
          <li> Change Your Language and Marketplace in Amazon Assistant</li>
          <li> Coupons - FAQ</li>
          <li> Damaged, Defective or Wrong Product - FAQ</li>
        </ul>
      </div>
      <div className="divide">
        <h3 className="more">Find more solutions</h3>
        <input type="text" className="text" value={info} />
        <h1 className="proceed">Proceed to CheckOut</h1>
        <p className="para">
          1.Select Proceed to Checkout. Note: If you place an order for an item
          sold by Amazon with a credit card, we won't charge you until the order
          enters the shipping process. If you place an order from one of our
          third-party sellers, the seller may charge your card at the time of
          purchase.
          <br />
          2. If prompted, sign in to your account or create a new account if
          this is your first order.
          <br />
          3. Enter a shipping address.
          <br />
          4. Choose a shipping method. Note: If there's more than one item in
          your order, you'll have the option to group your items into as few
          shipments as possible, or to ship items as they become available (at
          an additional cost).
          <br />
          5. Enter your payment information.
          <br />
          6. Review your order details. Make sure you've applied any gift cards
          or promotional codes you want to use on your order.
          <br />
          7. Select Place your order
        </p>
      </div>
    </div>
  );
};

export default CheckOut;
