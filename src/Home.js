import React from 'react';
import Product from './Product';

const Home = () => 
{
  return(
     <>
        <div className="main_home">
             {
               <Product 
                id= "1111111"
                title = "Leolqefqefqwfqwfwq"
                price = {11.96}
                rating = {5}
                image = "/images/lean startup img1.jpg"               

               />
             }
        </div>
     </>
  )
};

export default Home;
