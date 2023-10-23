import React from "react";
import "/src/styles/Logincard.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
   

    {/* login card */}
    <div className="login-card">
    <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Username</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <div className="submitbtn">
        <button type="submit" id="btn">Submit</button>
        </div>
        <h3>Dont’t have an account? <Link to="/">Sign up</Link></h3>
      </form>
    </div>


    
</>
    
  
    
   

    
  );
}

export default Navbar;
