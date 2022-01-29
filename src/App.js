import React from "react";
import './App.css';
import  { BrowserRouter as Router ,Routes ,Route  } from "react-router-dom";
import Homepage from "./Homepage";
function App() {
  return (
    <Router>
      <Routes> 
      
         <Route path = "/checkout" element = {<Checkout />}> </Route>
         <Route path = "/login"    element = {<Login/>}>  </Route>
         <Route path = ""          element = {<Mainhomepage/>}> </Route>
      </Routes>
    </Router>
  );
}

function Checkout()
{
  return <Checkout />
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
