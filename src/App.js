import React from "react";
import './App.css';
import  { BrowserRouter as Router ,Routes ,Route  } from "react-router-dom";
import Homepage from "./Homepage";
import  Checkout  from "./Checkout";
import Navbar from "./Navbar";
import Loginpg from  "./Loginpg";


function App() {
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
