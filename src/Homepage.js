import React from 'react';
import Navbar from './Navbar';
import Carouselpart from './Carouselpart';
import Product from "./Product";

const Homepage = () => 
{
  return(
    <>
     <Navbar />
     <Carouselpart />
   
      <div className = "main_container" style = {{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
 
      </div>

    </>
  )
};

export default Homepage;
