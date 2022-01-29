
import React from 'react';

const Passing = () => 
{
  return(
   <>
        <div className = "product">
                <div className="product_info">
                    <p>{title}</p>
                    <p className ="product_price">
                        <small> $$ </small>
                        <strong> {price} </strong>
                    </p>
                    <div className="product_rating">
                        <p>*****</p>
                    </div>
                </div>
        </div>

        <img src = {image} alt = "" />
          <button onClick = {addtobasket}> 
          Add to Basket 
         </button>
   </>
  )
};

export default Passing;
