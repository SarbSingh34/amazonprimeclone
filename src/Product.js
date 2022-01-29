import React from 'react';

const Product = () =>
 {

  return (
           <>
               <div className = "start" style = {{display:'flex',justifyContent:'space-evenly',margin:'21.1px'}}>
                        <div className= "product_main" style = {{width:'30%',backgroundColor:'white'}}>
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

                        <div className= "product_main" style = {{width:'30%',backgroundColor:'white'}}>
                                    <p> SanDisk Ultra Dual SDDD3-128G-I35 USB 3.0 128GB
                                         Flash Drive (Dual Micro-USB and USB 3.0 connectors)
                                    </p>
                                    <p> 134.9 </p>
                                    <p> 4 </p>
                                    <div className="img" style = {{textAlign:'center'}}>
                                       <img src = "/images/sandisk img.jpg" style = {{width:'51%'}} />
                                    </div>
                                    <div className="button_div" style = {{textAlign:'center'}}>
                                      <button> Add to Basket  </button>
                                    </div>
                        </div>
               </div>


               {/* ------>>>>     */}

               <div className = "start" style = {{display:'flex',justifyContent:'space-evenly',margin:'21.1px'}}>
                        <div className= "product_main" style = {{width:'30%',backgroundColor:'white'}}>
                                    <p>The Lean Startup: How Constant Innovation 
                                        Creates Radically Successful 
                                    </p>
                                    <p> 11.96 </p>
                                    <p> 5 </p>
                                    <div className="img" style = {{textAlign:'center'}}>
                                       <img src = "/images/BAGPACK.jpg" style = {{width:'51%'}} />
                                    </div>
                                    <div className="button_div" style = {{textAlign:'center'}}>
                                      <button> Add to Basket  </button>
                                    </div>
                        </div>

                        <div className= "product_main" style = {{width:'30%',backgroundColor:'white'}}>
                                    <p> SanDisk Ultra Dual SDDD3-128G-I35 USB 3.0 128GB
                                         Flash Drive (Dual Micro-USB and USB 3.0 connectors)
                                    </p>
                                    <p> 134.9 </p>
                                    <p> 4 </p>
                                    <div className="img" style = {{textAlign:'center'}}>
                                       <img src = "/images/canonimg 1.jpg" style = {{width:'51%'}} />
                                    </div>
                                    <div className="button_div" style = {{textAlign:'center'}}>
                                      <button> Add to Basket  </button>
                                    </div>
                        </div>

                        
                        <div className= "product_main" style = {{width:'30%',backgroundColor:'white'}}>
                                    <p> SanDisk Ultra Dual SDDD3-128G-I35 USB 3.0 128GB
                                         Flash Drive (Dual Micro-USB and USB 3.0 connectors)
                                    </p>
                                    <p> 134.9 </p>
                                    <p> 4 </p>
                                    <div className="img" style = {{textAlign:'center'}}>
                                       <img src = "/images/SHOES IMG 1.jpg" style = {{width:'51%'}} />
                                    </div>
                                    <div className="button_div" style = {{textAlign:'center'}}>
                                      <button> Add to Basket  </button>
                                    </div>
                        </div>
               </div>

          </>
  )
};

export default Product;
