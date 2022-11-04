import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.

import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Credit from "../Credit";


const Home = () => {
  
  return (
    <div>
    {/* <Navbar /> */}


      <Credit/>
  
    {/* <Footer /> */}
    </div>
  );
};
  
export default Home;




// <h1>Home Page</h1>
// <br />
// <ul>
//   <li>
//     <Link to="/">Home</Link>
//   </li>
//   <li>
//     {/* Endpoint to route to About component */}
//     <Link to="/login">Login</Link>
//   </li>
//   <li>
//     {/* Endpoint to route to Contact Us component */}
//     <Link to="/signup">SignUp</Link>
//   </li>
// </ul>