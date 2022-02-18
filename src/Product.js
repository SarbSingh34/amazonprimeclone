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


      <div className="card" style = {{display:'flex'}}>
          <img className="card-img-top" src= {image} alt="Card image cap" style = {{width:'42%',padding:'2%'}}/>
            <div className="card-body" style = {{width:'50%'}}>
               <h5 className ="card-title" style = {{margin:'0%',fontSize:'17px'}}> {title} </h5>
               <h5 className ="card-title" style = {{margin:'0%'}}> {price} </h5>
               <h5 className ="card-title" style = {{margin:'0%',fontSize:'25px'}}> {rating} </h5>
                  <div className="btn-main" style = {{textAlign:'center',padding:'5% 1%'}}>
                      <button  id = "btn-add" class="btn btn-primary"  onClick={addtocart} style = {{fontSize:'initial',border:'2px solid black',cursor:"pointer"}}> Add to Cart </button>
                  </div>
            </div>
      </div>


                 {/* <div className="product-cover" style = {{display:'flex'}}>
                    <div className="first-part" style = {{padding:'5%'}}>
                      <div className="image">
                         <img src = {image} style = {{width:'100%',height:'100%'}} />
                      </div>
                    </div>
                     <div className="second-part">
                           <div className="main-text">
                              <p style = {{fontSize:'22px',fontWeight:'600'}}> {title} </p>
                           </div>
                           <div className="price">
                           <strong> <span> Price: </span> {price} </strong>
                           </div>
                           <div className="rating">
                                 <strong> <span> Rating: </span> {rating} </strong>
                           </div>
                           <div className="cart-btn">
                              <button onClick={addtocart}> Add to Cart </button>
                      </div>
                     </div>
                 </div>  */}


                 
      </div>
  </>
  )
};

export default Product;

{/* <p>{title}</p>
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
</div> */}