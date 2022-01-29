import React from 'react';

const Product = () =>
 {
  return (
      <div className = "start" style = {{display:'flex',width:'22%',margin:'21.1px'}}>
            <div className= "product_main" style = {{width:'100%',backgroundColor:'#6ee6e6'}}>
                    <p>The Lean Startup: How Constant Innovation 
                        Creates Radically Successful 
                    </p>
                    <p> 11.96 </p>
                    <p> 5 </p>
                    <div className="img" style = {{textAlign:'center'}}>
                       <img src = "/images/lean startup img1.jpg" style = {{width:'51%'}} />
                    </div>
                    <div className="button_div" style = {{textAlign:'center'}}>
                       <button> Add to Basket  </button>
                    </div>
            </div>
      </div>
     
  )
};

export default Product;
