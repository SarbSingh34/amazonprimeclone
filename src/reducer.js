// Actual Data flow is happening here----
// /Data Logic is here.....
export const initialState = {

  basket:[],
     user:null,
};

export const getbasketotal = (basket) =>
 basket?.reduce((amount,item) => item.price + amount , 0);

function reducer(state,action)
{
     console.log(action);
  switch(action.type)
  {
      case "ADD_TO_CART": 
      return {
          ...state,
          basket: [...state.basket,action.item],
        }
       
      case "REMOVE_FROM_CART": 

      // we cloned the basket
      let newbasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) =>
      basketItem.id === action.id);

       if(index>=0)
       {
         // item exists in market remove it 
          newbasket.splice(index,1);
       }
       else
       {
          console.log("can't remove this id")
       }
      return {
        ...state, basket : newbasket};
      default:
        return state;
  }

}

export default reducer;