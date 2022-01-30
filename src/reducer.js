// Actual Data flow is happening here----
// /Data Logic is here.....
export const initialState = {

     basket:[
       {  id:"12121212",
          title: "New iPad.........",
          price:  598.66,
          rating:4,
          image: "/images/SHOES IMG 1.jpg"
       },
       {  id:"44444444",
       title: "Old iPad.........",
       price: 499.00,
       rating:1,
       image: "/images/canonimg 1.jpg"
    }],
     user:null,
};

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
      return {state}
      default:
        return state;
  }

}

export default reducer;