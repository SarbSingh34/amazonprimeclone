import React from 'react';

const Loginpg = () => 
{
  return (
      <>
         <div className="login_container" style = {{textAlign:'center',paddingTop:'2%'}} >
             <div className="main_content" style = {{backgroundColor:'brown',width:'17%',padding:'3% 2%'}}> 
                <h1> Sign in  </h1>
                 <div className="main">
                      <span style = {{paddingRight:'10%'}}> Email: </span>
                      <input type = "text" />
                 </div>
                 <div className="main">
                      <span> Password: </span>
                      <input type = "password" />
                 </div>
                 <button>SignIn</button>
                 <p> By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>
                 <button>Create your Amazon Account </button>
             </div>
            
        </div>
      </>
  )
};

export default Loginpg;
