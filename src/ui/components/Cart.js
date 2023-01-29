import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const [price, setPrice] = useState(0);
  const location = useLocation();


  let data = location.state.data;
  console.log(data);
  

  return (
    <div>
      <Navbar />

      <article>
        <div className="cart-container">
          <div className="cart-heading">
            <h1>Shopping Cart</h1>
          </div>
          {[data].map((e) => {
            return (
              <>
                <div key={e.id} className="cart_box">
                  <div className="cart_img">
                    <img src={e.image} alt="#" />
                    <p>{e.title}</p>
                  </div>
                  <div>
                    <button>+</button>
                    <button></button>
                    <button>-</button>
                  </div>
                  <div>
                    <span>{e.price}</span>
                    <button>Remove</button>
                  </div>
                </div>
              </>
            );
          })}
          <div className="total">
                  <span>Total Price of your Cart</span>
                  <span>Rs -</span>
                </div>
        </div>
      </article>
    </div>
  );
};

export default Cart;

