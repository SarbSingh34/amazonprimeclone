// settig up the data layer 
// it is main layer for Context Api...

import React, {createContext , useContext , useReducer }  from "react";

// This is theData Layer

export const StateContext = createContext();

//  Build a Provider 
export const StateProvider = ({ reducer,initialState,children}) =>
(
     <StateContext.Provider value = {useReducer(reducer,initialState)}>
     {children}  
     </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);