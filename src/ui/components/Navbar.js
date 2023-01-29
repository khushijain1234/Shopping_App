import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import {
  CardTravel,
  Search,
  ShoppingCart,
  ShowChart,
} from "@mui/icons-material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import  EmptyCart  from "./EmptyCart";

const Navbar = () => {
  const [data, setData] = useState([]); //why bracket
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  const getData = useSelector((state) => state.cardItems.cardData);
  console.log(getData);

  const showCart = () => {
    getData.length!=0 ? (
      navigate("/Cart", { state: { data: getData } })
    ) : (
      <EmptyCart />
    );
  };
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/categories",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="navbar">
      <h1 className="heading">ShopSite</h1>
      <div className="categoriess">
        {data.map((item, index) => {
          return (
            <button className="category-btn" key={index}>
              {item}
            </button>
          );
        })}
      </div>
        <button onClick={() => {
              navigate("/Login");
            }} className="btn">Login</button>

        <button>
          <div className="searchIcon">
              <Search />
          </div>
        </button>

        <button>
          <div className="searchIcon">
            <FilterAltIcon />
          </div>
        </button>

        <button>
          <div className="searchIcon">
            <ImportExportIcon />
          </div>
        </button>

        <button
            onClick={() => {
              showCart();
            }}
          >
          <div className="searchIcon">
            <ShoppingCart />
            <span className="badge"> {getData.length} </span>
          </div>
        </button>

     
    </div>
  );
};

export default Navbar;
