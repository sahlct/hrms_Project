import React, { useState } from 'react';
import './home.css';
// import { Link } from 'react-router-dom';

export default function Home() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [reset, setReset] = useState(false);

  function toggleForm(data) {
    setIsSignUp(prevState => !prevState);
    if(data === true){
        setReset(true)
    }else{
        setReset(false)
    }
  }
  return (
    <div className="mainContainer">
    <div className={`containerLogin ${isSignUp ? 'active' : ''}`}>

        {/* creat Account  */}

      <div style={{display: reset ? 'none' : 'flex'}} className="form-container sign-up">
        <form action='/signup'>
        <div className='headings d-flex'>
          <h1 className='validText'>Create Account</h1>
          <h1 className='hiddenText' onClick={toggleForm}>Login</h1>
        </div>
          <span className='regText'>Use your email for registration</span>
          <div className='inputContainer'>
          <input type="text" placeholder="Name" required/>
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required/>
          </div>
          <button type="submit">Sign Up</button>
            <p className='hiddenText bottomText'>You have already an account <span style={{color:'blue', cursor:'pointer'}} onClick={toggleForm}>Login</span></p>
        </form>
      </div>

            {/* Login Page  */}

      <div style={{display: reset ? 'none' : 'flex'}} className="form-container sign-in">
        <form action='/login'>
          <div className='headings d-flex'><h1 className='hiddenText' onClick={toggleForm}>Create Account</h1>
          <h1 className='validText'>Login</h1></div>
          {/* <div className="social-icons"></div> */}
          <span className='regText'>Use your email and password</span>
          <div className='inputContainer'>
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required/>
          </div>
          <p className='bottomText'>Forgot your Password ? <span className='text-decoration-underline' style={{color:'blue', cursor:'pointer'}} onClick={()=> toggleForm(true)}>Forgot</span></p>
          {/* <p style={{margin:'0 0 20px 0'}} className='hiddenText bottomText hideContent'>You don't have an account <span style={{color:'blue', cursor:'pointer'}} onClick={toggleForm}>Create account</span></p> */}
          <button type="submit">Login</button>
        </form>
      </div>

                {/* forget Password */}

      <div style={{display: reset ? 'flex' : 'none'}} className="form-container forget">
        <form action='/forget'>
        <div className='headings d-flex'>
          <h1 className='validText'>Reset Pass</h1>
          {/* <h1 className='hiddenText' onClick={toggleForm}>Forget Password</h1> */}
        </div>
          <span className='regText'>Use your email for reset password</span>
          <div className='inputContainer'>
          <input type="email" placeholder="Email" required/>
          </div>
          <button type="submit">Reset Password</button>
            <p className='hiddenText bottomText'>You have already an account <span style={{color:'blue', cursor:'pointer'}} onClick={toggleForm}>Login</span></p>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">

                {/* create Ac Left  */}

          <div style={{display: reset ? 'none' : 'flex'}} className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" onClick={toggleForm}>
              Login
            </button>
          </div>

                    {/* login page left  */}

          <div style={{display: reset ? 'none' : 'flex'}} className="toggle-panel toggle-right">
            <h1>Hello Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" onClick={toggleForm}>
              Sign Up
            </button>
          </div>

                    {/* forget Pass left  */}

          <div style={{display: reset ? 'flex' : 'none'}}  className="toggle-panel toggle-left ">
            <h1>Forgot Password</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" onClick={()=> toggleForm(false)}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

