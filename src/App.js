import React from "react";
import './App.css';
import  { BrowserRouter as Router ,Routes ,Route  } from "react-router-dom";
import Homepage from "./Homepage";
import  Checkout  from "./Checkout";
import Navbar from "./Navbar";


function App() {
  return (
    <Router>
      <Routes> 
      
         <Route path = "/checkout" element = {<Checkoutpage />}> </Route>
         <Route path = "/login"    element = {<Login/>}>  </Route>
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
function Login()
{
  return<h1> This is the Login Page.... </h1>
}
function Mainhomepage()
{
  return (
    <Homepage /> 
  
  ) 
}
export default App;
