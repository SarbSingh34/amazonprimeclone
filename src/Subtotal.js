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
                Subtotal ({basket.length} items) : <strong>{`  ${value} `}</strong>
            </>
        )}
            decimalScale = {2}
            value = {getbasketotal(basket)}
            displayType = {"text"}
            thousandSeparator = {true}
            prefix = {"$"}/>
      </div>
       <button> Proceed to Checkout </button>
      </>
  )
};

export default Subtotal;
