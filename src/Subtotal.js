import { SportsBasketball } from '@material-ui/icons';
import React from 'react';
import CurrencyFormat from "react-currency-format";


const Subtotal = () => 
{
  return (
      <>
      <div className="subtotal">
          <CurrencyFormat  
          renderText={(value) =>
        (
            <>
            Subtotal ({basket.length} items ) : <strong>  </strong>
            </>
        )}
            decimalScale = {2}
            VALUE = {}
            displayType = {"text"}
            thousandSeparator = {true}
            prefix = {"$"}/>
      </div>
       <button> Proceed to Checkout </button>
      </>
  )
};

export default Subtotal;
