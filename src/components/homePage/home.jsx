import React, { useState } from 'react';
import './home.css';
// import { Link } from 'react-router-dom';

export default function Home() {
  const [isSignUp, setIsSignUp] = useState(true);

  function toggleForm() {
    setIsSignUp(prevState => !prevState);
  }
  return (
    <div className="mainContainer">
    <div className={`containerLogin ${isSignUp ? 'active' : ''}`}>
      <div className="form-container sign-up">
        <form action='/signup'>
          <h1>Create Account</h1>
          <div className="social-icons"></div>
          <span>Use your email for registration</span>
          <input type="text" placeholder="Name" required/>
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required/>
          <button type="submit">Sign Up</button>
            <p className='hiddenText'>You have already an account <span style={{color:'blue', cursor:'pointer'}} onClick={toggleForm}>Login</span></p>
        </form>
      </div>
      <div className="form-container sign-in">
        <form action='/login'>
          <h1>Sign In</h1>
          <div className="social-icons"></div>
          <span>Use your email and password</span>
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required/>
          <p>Forgot your Password ? <span className='text-decoration-underline' style={{color:'blue', cursor:'pointer'}}>Forgot</span></p>
          <p style={{margin:'0 0 20px 0'}} className='hiddenText'>You don't have an account <span style={{color:'blue', cursor:'pointer'}} onClick={toggleForm}>Create account</span></p>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" onClick={toggleForm}>
              Login
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

