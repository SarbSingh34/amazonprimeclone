import React , { useState } from 'react';
import { auth   } from './Firebase';
import { Navigate, useNavigate } from "react-router-dom";
import './Login.css';

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
            <div className="login-container" style = {{paddingTop:'4%'}}>
            <div className="main_content" style = {{backgroundColor:'rgb(142, 137, 137)',padding:'1% 1% 3% 2%',margin:'1% 32%',width:'22%',boxShadow:'1px 1px 7px 1px #433F3c'}}> 
                           <div className="cover" style = {{padding:'1% 4% 14% 4%'}}>
                              <span style = {{fontSize:'xx-large',fontWeight:'500'}}> Sign in  </span>
                              <div className="main">
                                    <span style = {{paddingRight:'7%',fontWeight:'700'}}> Email: </span>
                                    <br></br>
                                    <input type = "text"    value = {email}  onChange = { e => setemail(e.target.value) } style = {{width:'73%',padding:'1%'}}   />
                              </div>
                              <div className="main">
                                    <span style = {{fontWeight:'700'}}> Password: </span>
                                    <br></br>
                                    <input type = "password" value = {pass}  onChange = { e => setpass(e.target.value) }  style = {{width:'73%',padding:'1%'}} />
                              </div>
                              <div className="btn-cover" style = {{textAlign:'center',marginTop:'8%'}}>
                                  <button id = "btn-2" type = "submit" onClick={singin} >SignIn</button>
                              </div>
                               <p style = {{fontSize:'small'}}> By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>

                               <div className="btn-cover" style = {{textAlign:'center'}}>
                                   <button id = "btn-1" type = "submit" onClick={register} > Create your Amazon Account </button>
                               </div>
                           </div>
                    </div>
            </div>
      </>
  )
};

export default Loginpg;


{/* <div className="login_container" style = {{textAlign:'center',paddingTop:'2%'}} >
              <div className="cover-content">
  
                      <div className="main_content" style = {{backgroundColor:'#8e8989',padding:'3% 2%',margin:'1% 33%',width:'25%'}}> 
                           <div className="cover" style = {{padding:'8% 5%'}}>
                              <span style = {{fontSize:'xx-large',fontWeight:'500'}}> Sign in  </span>
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

        </div> */}