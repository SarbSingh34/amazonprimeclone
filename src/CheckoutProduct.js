import React from 'react';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id,title,image,price,rating}) =>
 {
      const [{basket},dispatch] = useStateValue();

     const removefrombasket = () =>
   {
     dispatch(
         {
             type : "REMOVE_FROM_CART",
             id:id,
         });
    };

  return (
  <>
        <div className="checkoutProduct" style = {{backgroundColor:"#efefef",borderTop:'2px solid #9b8787',borderBottom:'2px solid #9b8787'}}>
           
                <div className="checkproduct_info" style = {{display:'flex'}}>
                           <div className="first-product" style = {{width:'30%'}}>
                               <img src = {image} alt = "" style = {{width:'60%'}}/>
                           </div>
                           <div className="second-product">
                                    <p className = "checkoutproduct_title">
                                        {title}
                                    </p>
                                    <p className = "checkproduct_price">
                                        <strong> Price: </strong>
                                        <small>$</small>
                                        <strong> {price} </strong>
                                    </p>
                                    <p className = "rating">
                                  
                                        <strong> {rating} </strong>
                                    </p>
                                    <button onClick = {removefrombasket} style = {{padding:'1%'}} >
                                        Remove from Basket 
                                    </button>
                           </div>
                           <br></br>
                </div>
        </div> 
                 <br></br>
                <br></br>
             
  </>
  )
};

export default CheckoutProduct;
