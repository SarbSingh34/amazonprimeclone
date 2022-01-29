import React from 'react';
import Navbar from './Navbar';
import Carouselpart from './Carouselpart';
import Home from './Home';

const Homepage = () => 
{
  return(
    <>
     <Navbar />
     <Carouselpart />
   
      <div className = "main_container" style = {{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
           <Home />
      </div>

    </>
  )
};

export default Homepage;
