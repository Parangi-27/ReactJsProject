import React from "react";
import styles from "./styles.module.css";
import Button from "../Button/button";
import login from "./login.png";
import { useState,useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import gif from "../loaderlogo.gif";

const SignUp = (props) => {
  const [loading, setload] = useState(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
  });
  const [error, setError] = useState({
    error1: "",
    message: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, phoneNo } = data;
    const res = await fetch("register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
        phoneNo,
      }),
    });
    const t = await res.json();
    if (t) {
      if (t.error || t.message) {
        console.log("hello error");
        setError({ error1: t.error, message: t.message });
      }
      if (t.message) {
        window.location.href = "/login";
      }
      //  console.log(error);
    }
  };

  const styleprops = useSpring({
    from: {
      opacity: 0,
      transform: "translate(4000px,-4000px)",
      rotateZ: 0,
    },
    to: { opacity: 1, transform: "translate(0,0)", rotateZ:360 },
    delay: 3000,
    config: {
      duration: 1300,
    },
  });
  useEffect(() => {
    setTimeout(() => {
      setload(false);
    }, 4000);
  }, []);
  return (
    <>
   {loading ? (
        <center><img src={gif} alt="load"></img></center>
      ) : (
      <animated.div style={styleprops} className={styles.box}>
        <div className={styles.signup_container}>
          <img src={login} alt="img" className={styles.image}></img>
          <animated.form style={styleprops} onSubmit={handleSubmit}>
            <h1 className={styles.textlogin}>
              {" "}
              &lt;signUp <span className={styles.st}>/</span>&gt;
            </h1>
            <div className={styles.inputBox}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <span>Email</span>
			  <br />
              <input
                type="name"
                name="name"
                onChange={handleChange}
                value={data.name}
                required
                className={styles.input}
              />
              <span>Name</span>
			  <br />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              <span>Password</span>
              <br></br>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={data.confirmPassword}
                required
                className={styles.input}
              />
              <span>Confirm Password</span>
              <br></br>
              <input
                type="phoneNo"
                name="phoneNo"
                onChange={handleChange}
                value={data.phoneNo}
                required
                className={styles.input}
                pattern="[0-9]{10}"
              />
              <span>Contact No.</span>
              <br></br>
              {{ error } && (
                <div className={styles.error_msg}>{error.error1}</div>
              )}
              <Button name="Sign Up" />
              <div className={styles.last}>
                <h3>Already have an Account?</h3>
                <Link to="/login">
                  <Button name="Login" />
                </Link>
              </div>
            </div>
          </animated.form>
        </div>
      </animated.div>)}
    </>
  );
};

export default SignUp;
