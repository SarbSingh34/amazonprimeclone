import React from 'react';
import Product from './Product';

const Home = () => 
{
  return(
     <>
            <div className="container_content" style = {{display:'flex',justifyContent:'space-evenly'}}>
                    <div className="main_home" style = {{backgroundColor:'#eaeaea',width:'25%'}}>
                        {
                        <Product 
                            id= "1111111"
                            title = "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses "
                            price = {11.96}
                            rating =  "⭐⭐⭐⭐⭐"
                            image = "/images/lean startup img1.jpg"    
                        />
                        }
                    </div>
             {/* -------->>>>> */}

                <div className="main_home" style = {{backgroundColor:'#eaeaea',width:'25%'}}>
                    {
                    <Product 
                        id= "222222"
                        title = "SanDisk Ultra Dual SDDD3-128G-I35 USB 3.0 128GB Flash Drive (Dual Micro-USB and USB 3.0 connectors)"
                        price = {12.00}
                        rating = "⭐⭐"
                        image = "/images/sandisk11-removebg-preview.png"    
                    />
                    }
               </div>   
        </div>

         {/* ------------------------- */}

         <div className="container_content" style = {{display:'flex',justifyContent:'space-evenly',paddingTop:'5%'}}>
                    <div className="main_home" style = {{backgroundColor:'#eaeaea',width:'25%'}}>
                        {
                        <Product 
                            id= "9999999999"
                            title = "ADISA Laptop Backpack 31 Ltrs"
                            price = {13.96}
                            rating = "⭐⭐⭐⭐"
                            image = "/images/bagpack-removebg-preview.png"                

                        />
                        }
                    </div>
             {/* -------->>>>> */}

                <div className="main_home" style = {{backgroundColor:'#eaeaea',width:'25%'}}>
                    {
                    <Product 
                        id= "8888888"
                        title = "Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black) + Arctic Fox Sling Shutter Topography"
                        price = {14.00}
                        rating = "⭐⭐⭐"
                        image = "/images/canon_img-removebg-preview.png"       
                    />
                    }
               </div>   

               <div className="main_home" style = {{backgroundColor:'#eaeaea',width:'25%'}}>
                    {
                    <Product 
                        id= "777777777"
                        title = "Men's Mesh Lace-Ups Running Fashion Shoes"
                        price = {14.00}
                        rating = "⭐⭐⭐⭐⭐"
                        image = "/images/Sneakers-removebg-preview.png"  
                    />
                    }
               </div>  
        </div>

     </>
  )
};

export default Home;
