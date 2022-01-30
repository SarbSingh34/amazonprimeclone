import React , { useState } from 'react';
import { auth } from 'Firebase';

const Loginpg = () => 
{
 const [email,setemail] =     useState('');
  const [pass,setpass]   =    useState('');

  function singin(e)
  {
     e.preventDefault();
  }

//   ---

  function register(e)
  {
       e.preventDefault();
     auth.createUserWithEmailAndPassword(email,pass)
     .then((auth) =>
     {
       console.log(auth);
     })
     .catch(error =>alert(error.message))
  }
  return (
      <>
         <div className="login_container" style = {{textAlign:'center',paddingTop:'2%'}} >
             <div className="main_content" style = {{backgroundColor:'brown',width:'17%',padding:'3% 2%'}}> 
                <h1> Sign in  </h1>
                 <div className="main">
                      <span style = {{paddingRight:'10%'}}> Email: </span>
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
      </>
  )
};

export default Loginpg;
