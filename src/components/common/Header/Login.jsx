import React from 'react'
import './login1.css'
// import SignupPage from './Signup';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div class="asdfghk">
     <div class="login-container">
  <form class="login-form">
    <h1 class="emvl">Login Form</h1>
    <div class="input-group">
      <input type="text" id="username" name="username" placeholder="Username" required/>
    </div>
    <div class="input-group">
      <input type="password" id="password" name="password" placeholder="Password" required/>
    </div>
    <button class="emv" type="submit">Login</button>
    <div class="bottom-text">
      <p>Don't have an account? <Link to="./Signup">Sign Up</Link></p>
      <p><a href="#">Forgot password?</a></p>
    </div>
  </form>
</div>
    </div>
  )
}

export default Login







