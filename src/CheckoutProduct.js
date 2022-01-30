import React from 'react';

const CheckoutProduct = ({id,title,image,price,rating}) =>
 {
  return (
  <>
    <div className="checkoutProduct">
         <img src = {image} alt = ""/>
         <div className="checkproduct_info">
             <p className = "checkoutproduct_title">
                 {title}
             </p>
             <p className = "checkproduct_price">
                  <small>$</small>
                  <strong> {price} </strong>
             </p>
             <p className = "rating">
                 <h1> {rating} </h1>
             </p>
             <button>
                 Remove from Basket 
             </button>
         </div>
    </div> 
  </>
  )
};

export default CheckoutProduct;
