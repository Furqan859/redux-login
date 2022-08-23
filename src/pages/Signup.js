import React from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="login-main-div">
    
    
    <div className="login-table-one">
    <h5>Registered Customers</h5>
    <p>If you have an account, sign in with your email address.</p>
    <div className="input-login">
    <input className="input-styling-login-input" type="text" placeholder="UserName"/>
    <input className="input-styling-login" type="password" placeholder="Password" />
    </div>
    <div>
    </div>
   <div className="button-password-div">
   <div> <NavLink to="/home"><button className="sign-in-button">Sign In</button></NavLink></div>
   <NavLink to="/login " className="forgot-password-link"><button className="sign-in-button">SignUp</button></NavLink>
   </div>
    </div>
    </div>
    
  )
}

export default Signup 