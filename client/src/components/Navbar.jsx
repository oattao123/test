import React from "react";
import "/src/styles/navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav className="nav-l-r">
      <div className="container">
        <div className="Nav_flex">
          <div className="Nav_Menu">
            <div className="logo">
              <img src={logo} alt="" />
              <h1>BIZ-NA</h1>
            </div>
            <ul className="menu_1">
              <li>
                <Link to="/">Market</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>
            </ul>
          </div>
          <ul className="Nav_login">
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link id="Register" to="/">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

   


    
</>
    
  
    
   

    
  );
}

export default Navbar;
