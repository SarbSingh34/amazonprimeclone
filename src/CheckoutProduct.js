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
        <div className="checkoutProduct" style = {{backgroundColor:"crimson",}}>
            <img src = {image} alt = "" style = {{width:'10%'}}/>
                <div className="checkproduct_info">
                        <p className = "checkoutproduct_title">
                            {title}
                        </p>
                        <p className = "checkproduct_price">
                            <small>$</small>
                            <strong> {price} </strong>
                        </p>
                        <p className = "rating">
                            <strong> {rating} </strong>
                        </p>
                        <button onClick={removefrombasket}>
                            Remove from Basket 
                        </button>
                </div>
        </div> 
  </>
  )
};

export default CheckoutProduct;
