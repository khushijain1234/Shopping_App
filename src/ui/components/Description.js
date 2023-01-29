import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import addToCart from "../Services/Actions/Action";
import { Checkout } from "./Checkout";

const Description = (props) => {

  let navigate = useNavigate();
  const location = useLocation();
  let id = location.state.id;
 
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const send = (e) => {
    //console.log(e);
    dispatch(addToCart(e));
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${id}`,
    })
      .then((res) => {
        //console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  let length = props.data.length;

  return (
    <>
      <Navbar data={length} />
      <div className="product-container">
        <div className="content">
          <div className="item">
            <img className="img1" src={data.image}></img>
          </div>
          <div className="item">
            <h2>Shopsite</h2>
            <h1>{data.title}</h1>
            <h3>{data.description}</h3>
            <h4>{`Price: $${data.price}`}</h4>
            <br />
            <button onClick={()=>{
              navigate("/checkout");
            }} className="btn1">Buy Now</button>
            <button
              onClick={() => {
                //props.addToCartHandler(data.title)
                navigate("/Cart", { state: { data: data } });
                send(data);
              }}
              className="btn1"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Description;

