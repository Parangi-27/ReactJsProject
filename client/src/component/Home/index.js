import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.

import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Credit from "../Credit"; 
import gif from "../loaderlogo.gif";
import { useState, useEffect } from "react";

import Form from "../Form";
import Notification from "../Notification";


const Home = () => {
  const textnoti=`Sucessfully login `+JSON.parse(localStorage.getItem("loginuser")).name ;
  const [loading, setload] = useState(true);
  const [bool, setbool] = useState();
  useEffect(() => {
    setTimeout(() => {
      setload(false);
    }, 4000);
  }, []);
  var  boo =localStorage.getItem("bool");
     setbool(boo);
  return (
    
    <div>
    {loading  ? (
           <center><img src={gif} alt="load"></img></center>
      ) : (
        <div>
 <Notification success text={textnoti}error={false} promise={false} />
    
    <Navbar />

    <Form /></div>

       )} </div>
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