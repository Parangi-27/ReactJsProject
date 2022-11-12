import React, { useState } from "react";
import { NavLink} from 'react-router-dom';
import Credit from "../Credit"; 
import "./navbar.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
/**https://codepen.io/codebucks27/details/yLMvOPX */
function Navbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
    return (
      <div>
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
             khata-book
             <i className="fa fa-code"></i>
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Creditfrom"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Credit
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/detail"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Money
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    );
  }

export default Navbar;