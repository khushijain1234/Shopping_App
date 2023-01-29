import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Description from "./Description";
import HomeContainer from "../containers/HomeContainer";
import "../Auth.css";
import { useSelector } from "react-redux";

const Product = () => {

  let navigate = useNavigate();

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        
        setData(res.data);
        setFilter(res.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  // 

  return (
    <>
      <div className="categories">
      </div>
      <div className="products-container">
        {data.map((product) => (
          <div key={product.id} className="card">
            <div>
              <img
                src={product.image}
                alt="#"
                onClick={() => {
                  navigate("/HomeContainer", { state: { id: product.id } });
                }}
              />
            </div>
            <div className="card-description">
              <h6>{product.title}</h6>
              <h6>{`Price: ${product.price}`}</h6>
              <h6>{`Category: ${product.category}`}</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
