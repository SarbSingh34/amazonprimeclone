import React from "react";
import './App.css';
import  { BrowserRouter as Router ,Routes ,Route  } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes> 
      
         <Route path = "/checkout" element = {<Checkout />}> </Route>
         <Route path = "/login"    element = {<Login/>}>  </Route>
         <Route path = ""          element = {<Homepage/>}> </Route>
      </Routes>
    </Router>
  );
}

function Checkout()
{
  return<h1> This is the Checkout  Page.... </h1>
}
function Login()
{
  return<h1> This is the Login Page.... </h1>
}
function Homepage()
{
  return<h1> This is the Main  Home Page.... </h1>
}
export default App;
