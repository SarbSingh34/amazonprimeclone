import React from 'react';
import Product from './Product';

const Home = () => 
{
  return(
     <>
            <div className="container_content" style = {{display:'flex',justifyContent:'space-evenly'}}>
                <div className="main_home" style = {{backgroundColor:'tomato',width:'25%'}}>
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
             {/* -------->>>>> */}

        <div className="main_home" style = {{backgroundColor:'lightgreen',width:'25%'}}>
             {
               <Product 
                id= "222222"
                title = "devvvvvvvvvvvvvvv"
                price = {12.00}
                rating = {1}
                image = "/images/lean startup img1.jpg"   
               />
             }
        </div>   
            </div>
     </>
  )
};

export default Home;
