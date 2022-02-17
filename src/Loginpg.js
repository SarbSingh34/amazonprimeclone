import React , { useState } from 'react';
import { auth   } from './Firebase';
import { Navigate, useNavigate } from "react-router-dom";

//  useNavigate is used at place of usehistory 

const Loginpg = () => 
{
    // helps us to change URL 
    const Navigate = useNavigate(); 
  const [email,setemail]  =    useState('');
  const [pass,setpass]    =    useState('');

  function singin(e)
  {
     e.preventDefault();
     auth.signInWithEmailAndPassword(email,pass)
     .then(auth =>
      {
         Navigate('/')
      })  
      .catch(error =>alert(error.message))
  }

//   ---

  function register(e)
  {
       e.preventDefault();
     auth.createUserWithEmailAndPassword(email,pass)
     .then((auth) =>
     {
       console.log(auth);
       if(auth)            // authenticaion is not empty 
       {
        //    history.push('/')
              Navigate('/')
       }
     })
     .catch(error =>alert(error.message))
  }
  return (
      <>
         <div className="login_container" style = {{textAlign:'center',paddingTop:'2%'}} >
              <div className="cover-content">
  
                      <div className="main_content" style = {{backgroundColor:'brown',padding:'3% 2%',margin:'1% 33%',width:'25%'}}> 
                           <div className="cover" style = {{padding:'8% 5%'}}>
                           <h1> Sign in  </h1>
                          <div className="main">
                                <span style = {{paddingRight:'7%'}}> Email: </span>
                                <input type = "text"    value = {email}  onChange = { e => setemail(e.target.value) }   />
                          </div>
                          <div className="main">
                                <span> Password: </span>
                                <input type = "password" value = {pass}  onChange = { e => setpass(e.target.value) }  />
                          </div>
                           <button type = "submit" onClick={singin}>SignIn</button>
                          <p> By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>

                          <button type = "submit" onClick={register}> Create your Amazon Account </button>
                           </div>
                      
                    </div>

              </div>

        </div>
      </>
  )
};

export default Loginpg;
