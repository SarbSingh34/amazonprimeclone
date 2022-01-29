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
                        image = "/images/sandisk img.jpg"   
                    />
                    }
               </div>   
        </div>

         {/* ------------------------- */}

         <div className="container_content" style = {{display:'flex',justifyContent:'space-evenly',paddingTop:'5%'}}>
                    <div className="main_home" style = {{backgroundColor:'tomato',width:'25%'}}>
                        {
                        <Product 
                            id= "9999999999"
                            title = "kkkkkkkkkkkkkkkke"
                            price = {13.96}
                            rating = {99}
                            image = "/images/BAGPACK.jpg"                

                        />
                        }
                    </div>
             {/* -------->>>>> */}

                <div className="main_home" style = {{backgroundColor:'lightgreen',width:'25%'}}>
                    {
                    <Product 
                        id= "8888888"
                        title = "mevvvvvvvvvvvvvvv"
                        price = {14.00}
                        rating = {88}
                        image = "/images/canonimg 1.jpg"       
                    />
                    }
               </div>   

               <div className="main_home" style = {{backgroundColor:'lightgreen',width:'25%'}}>
                    {
                    <Product 
                        id= "777777777"
                        title = "sevvvvvvvvvvvv"
                        price = {14.00}
                        rating = {77}
                        image = "/images/SHOES IMG 1.jpg"        
                    />
                    }
               </div>  
        </div>

     </>
  )
};

export default Home;
