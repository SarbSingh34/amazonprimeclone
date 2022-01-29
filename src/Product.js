import React from 'react';
import { useStateValue } from './StateProvider';

const Product = ({id,title,image,price,rating}) =>
 {
    const[{ } ,dispatch] = useStateValue();
    const addtocart = () =>
    {
      dispatch(
        {
           type : "ADD_TO_CART",
           item :{
               id:id,
               title:title,
               image: image,
               price:price,
               rating:rating, 
           }
        })
    }
  
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
              <button onClick={addtocart}> Add to Cart</button>
            </div>
           
      </div>
  </>
  )
};

export default Product;
