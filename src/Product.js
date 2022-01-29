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
      <img src = {image} style = {{width:'15%'}} />
    </div>
  </>
  )
};

export default Product;
