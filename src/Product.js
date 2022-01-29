import React from 'react';

const Product = ({id,title,image,price,rating}) =>
 {
  return (
  <>
      <div className="product">
          <p>{title}</p>
            <p className = "product_">
              <small>$</small>
              <strong>{price}</strong>
              <br></br>
              <strong>{rating}</strong>
            </p>
            <div className="img_product"style = {{textAlign:'center'}}>
               <img src = {image} style = {{width:'60%'}} />
            </div>
            <div className="buuton_product"style = {{textAlign:'center'}}>
              <button> Add to Cart</button>
            </div>
           
      </div>
  </>
  )
};

export default Product;
