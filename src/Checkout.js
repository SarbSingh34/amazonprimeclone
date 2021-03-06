import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';
const Checkout = () => 
{
    const [{basket}] = useStateValue();
  return (
    <>
        <h1> This is checkout PG  </h1>
        { basket?.length === 0 ? (
                  <div>
                      <h2>Your Shopping basket is Empty  </h2>
                  </div>
        ) : (
            <div>
                 <h2> Your Shopping Basket is--</h2>

                 {/* List of all checkout products-- */}

                { basket.map(item =>
                    { 
                        return (
                            <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image= {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                        )  })
                } 
                </div>

        )}

        {basket.length >0 && (
            <div className="checkout_right">
                <h1> Subtotal   </h1>
                 <Subtotal />
            </div>
        )}
    </>
  )
};

export default Checkout;