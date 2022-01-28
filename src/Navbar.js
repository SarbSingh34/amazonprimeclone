import React from 'react';
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => 
{
  return(
    <div className='main_nav' style = {{display:'flex',backgroundColor:'black'}}>
           <div className="first_logo" style = {{width:'8%'}}>
                <img src = "/images/amazon img.jpg" style = {{width:'91%',padding:'1%'}} />
           </div>
           <div className="search_bar" style = {{paddingTop:'1%'}}>
                <input type = "text" className='header_searchinput'/>
                <SearchIcon  className = "main_icon" style = {{backgroundColor:'aliceblue'}}/>
           </div>
    </div>
  )
};

export default Navbar;
