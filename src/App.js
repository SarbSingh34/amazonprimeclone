import React, { useEffect } from "react";
import './App.css';
import  { BrowserRouter as Router ,Routes ,Route  } from "react-router-dom";
import Homepage from "./Homepage";
import  Checkout  from "./Checkout";
import Navbar from "./Navbar";
import Loginpg from  "./Loginpg";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";

function App()
{
    const [{},dispatch] = useStateValue();

  // will run for 1 time..
  // this is used yo make state presistent that even tab closes user willbe oin the same state
  // if he is in Login state stay  there 
  //  if Logout stay Logged out 
     useEffect(() =>
     {
         auth.onAuthStateChanged(authUser =>
          {
            console.log("The user is  ->>> , authUser");
          })
        if(authUser)
        {
         // user is Loggedin ..    
         dispatch({
           type : 'SET_USER',
           user: authUser
         })
      }
      else
      {
         dispatch({
           type : 'SET_USER',
           user:null
         })
         // user is Logged out 
      }


     },[])
  return (
    <Router>
      <Routes> 
      
         <Route path = "/checkout" element = {<Checkoutpage />}> </Route>
         <Route path = "/login"    element = {<Loginpage/>}>  </Route>
         <Route path = ""          element = {<Mainhomepage/>}> </Route>
      </Routes>
    </Router>
  );
}

function Checkoutpage()
{
  return (
    <>
    <Navbar />
  <Checkout />
    </>
    
  )
}
function Loginpage()
{
  return(
    <>
    <Navbar />
    <Loginpg />
    </>
  )
}
function Mainhomepage()
{
  return (
    <Homepage /> 
  
  ) 
}
export default App;
