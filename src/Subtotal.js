import { SportsBasketball } from '@material-ui/icons';
import React from 'react';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getbasketotal } from './reducer';

const Subtotal = () => 
{
    const [{basket},dispatch] = useStateValue();

    return (
      <>
      <div className="subtotal">
          <CurrencyFormat  
          renderText={(value) =>
        (
            <>
            <p style = {{fontSize:'15px',fontWeight:'800'}}>
                 Subtotal ({basket.length} items) :{`${value}`}
            </p>
            </>
        )}
            decimalScale = {2}
            value = {getbasketotal(basket)}
            displayType = {"text"}
            thousandSeparator = {true}
            prefix = {"$"}/>
      </div>
       <button  style = {{padding:'3px',fontWeight:'800'}}> Proceed to Checkout </button>
      </>
  )
};

export default Subtotal;
