import React from "react";
import styles from "./styles.module.css";
import Button from "../Button/button";
import { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import gif from "../loaderlogo.gif";
import Notification from "../Notification";
import axios from "axios";
import Select from "react-select";
import user from "./user.png";
import user1 from "./user1.png";
import LineChart from "../LineChart";

const Userpro = (props) => {
  var x = localStorage.getItem("loginuser");
  x = JSON.parse(x);
  x = x.name;
  var y = localStorage.getItem("loginuser");
  y = JSON.parse(y);
  y = y.email;
  var z = localStorage.getItem("loginuser");
  z = JSON.parse(z);
  z = z.phoneNo;
  const styleprops = useSpring({
    from: {
      opacity: 0,
      transform: "translate(-4000px,-1000px)",
    },
    opacity: 1,
    transform: "translate(0,0)",
  });

  return (
    <>
      <animated.div style={styleprops} className={styles.box}>
        <div className={styles.signup_container}>
          <img src={user1} alt="img" className={styles.image1}></img>
          <img src={user} alt="img" className={styles.image}></img>
          <h1 className={styles.textlogin}>{x}</h1>
          <h1 className={styles.textlogin}>{y}</h1>
          <h1 className={styles.textlogin}>{z}</h1>
        </div>
        <LineChart />
      </animated.div>
    </>
  );
};
export default Userpro;
