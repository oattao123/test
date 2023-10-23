import React from "react";
import "/src/styles/Nav2.css";
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
              <li>
                <Link to="/">Dashboard</Link>
              </li>
            </ul>
          </div>
          
          <div className="user-pic">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" width={50}/>
          </div>
        </div>
      </div>
    </nav>

   


    
</>
    
  
    
   

    
  );
}

export default Navbar;
