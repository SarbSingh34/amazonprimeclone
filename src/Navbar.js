import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import  ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from  "./StateProvider";
import Checkout from "./Checkout";
import reducer from './reducer';
import { auth } from './Firebase';
const Navbar = () => 
{

  const [state,dispatch] = useStateValue();  
 const [{basket,user }] = useStateValue();

  const handleAuthentication = () =>
  { 
     if(user)
     {
       auth.signOut();
     }
  }

 console.log(basket);

  return (
    <div className="main_nav" style={{ display: "flex", backgroundColor: "black", height: "9vh",width:'100%',position:'fixed',top:'0%' }}
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
                    style={{ backgroundColor: "#dfdfdf", padding: "4px" }}/>
                </div>
        </div>
      </div>
           <div className="side_content"
            style={{
            width: "36%",
             display: "flex",
             justifyContent: "space-evenly",
             padding:'12px'
             }}>

              <span> 
                 <Link to = {!user  && '/Login'} style = {{textDecoration:'none'}} >
                    <div className="header_option" onClick={handleAuthentication}
                        style={{  flexDirection: "column", color: "white",fontSize:'20px' }} >
                        <span className = "firstline"   > Hello </span>
                        <span className = "secondline" > {user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                  </Link>
              </span>

                  <span>
                  <Link to="/" style = {{textDecoration:'none'}}>
                      <div className="header_option"
                            style={{  flexDirection: "column", color: "white" }}>
                          <span className = "firstline" style = {{fontSize:'19px'}}> Returns </span>
                          <span className = "secondline" style = {{fontSize:'19px',fontWeight:'500'}}> & Orders </span>
                      </div>
                   </Link>
                    </span>
                   
                   <span> 
                   <Link to="/" style = {{textDecoration:'none'}}>
                      <div className="header_option"
                            style={{ flexDirection: "column", color: "white" }}>
                          <span className = "firstline"> Your </span>
                          <span className = "secondline"> Prime </span>
                      </div>
                   </Link>
                   </span>

                   <span> 
                      <Link to="/Checkout" style = {{textDecoration:'none'}}>
                        <div className="header_option"
                            style={{ display: "flex", flexDirection: "row", color: "white",padding:'11%' }} >
                            <span> <ShoppingBasketIcon /></span>
                            <span className = "secondline">{basket.length} </span>
                        </div>
                      </Link>
                   </span>
       </div>
        
    </div>
  );
};

export default Navbar;


