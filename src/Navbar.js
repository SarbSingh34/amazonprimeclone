import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import  ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from  "./StateProvider";
import Checkout from "./Checkout";

const Navbar = () => 
{

//  const [state,dispatch] = useStateValue();    syntax 
 const [{basket}] = useStateValue();

 console.log(basket);
  return (
    <div className="main_nav" style={{ display: "flex", backgroundColor: "black", height: "9vh",width:'100%' }}
    >
      <div className="first_logo" style={{ width: "11%" }}>
        <img
          src="/images/amazon img.jpg"
          style={{ width: "68%", height: "9vh" }}
        />
      </div>

      <div className="search_bar" style={{ width: "52%" }}>
         <div
            className="second_content"
            style={{ display: "flex", paddingTop: "2%" }}>
                <div className="search_icon" style={{ width: "74%" }}>
                    <input
                    type="text"
                    className="search_text"
                    style={{ padding: "1% 36%" }}/>
                </div>
                <div className="search_icon2">
                    <SearchIcon
                    className="search_icon3"
                    style={{ backgroundColor: "aquamarine", padding: "4px" }}/>
                </div>
        </div>
      </div>

        <div
            className="side_content"
            style={{
            width: "20%",
            display: "flex",
            justifyContent: "space-evenly",
            }}>
            <Link to="/">
            <div
                className="header_option"
                style={{ display: "flex", flexDirection: "column", color: "white" }}
            >
                <span className = "firstline"> Hello </span>
                <span className = "secondline"> Sign in </span>
            </div>
            </Link>

            <Link to="/">
            <div
                className="header_option"
                style={{ display: "flex", flexDirection: "column", color: "white" }}
            >
                <span className = "firstline" style = {{fontSize:'12px'}}> Returns </span>
                <span className = "secondline" style = {{fontSize:'19px',fontWeight:'500'}}> & Orders </span>
            </div>
            </Link>

            <Link to="/">
            <div
                className="header_option"
                style={{ display: "flex", flexDirection: "column", color: "white" }}
            >
                <span className = "firstline"> Your </span>
                <span className = "secondline"> Prime </span>
            </div>
            </Link>

            <Link to="/Checkout">
            <div
                className="header_option"
                style={{ display: "flex", flexDirection: "row", color: "white",padding:'32%' }}
            >
                <span> <ShoppingBasketIcon /></span>
                <span className = "secondline">{basket.length} </span>
            </div>
            </Link>
      </div>
    </div>
  );
};

export default Navbar;
