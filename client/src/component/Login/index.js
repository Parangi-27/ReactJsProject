import React from "react";
import styles from "./styles.module.css";
import Button from "../Button/button";
import login from "./login.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { animated, config, useSpring } from "react-spring";
import gif from "../loaderlogo.gif";
import Notification from "../Notification";
//import { Link, useNavigate,NavLink } from "react-router-dom";

const Login = (props) => {
  const [Data, setData] = useState({ email: "", password: "" });
  const [loading, setload] = useState(true);
  const [Error, setError] = useState({});
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...Data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = Data;
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      //   const res= await fetch("/send-sms",{
      // 	method:"GET",
      // 	headers:{
      // 		"Content-Type":"application/json"
      // 	},
      // 	// body:JSON.stringify({

      // 	// })
      //   });
      //	const res= await axios.post("/login", Data);
      //  res.json().then(data)=>{}
      const y = await res.json();
      console.log(y);
      setError({y});
      console.log(Error);
      localStorage.setItem("jtwtoken", JSON.stringify(y.token));
      localStorage.setItem("loginuser", JSON.stringify(y.loginuser));
      localStorage.setItem("bool",true);
      //  setLogin("jwtokenlocal",y.token);

      if (y.token && y) {
        console.log("logged in");
        // navigate("/");
       
        window.location.href = "/";
      } else {
      console.log("error in genrating token");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const styleprops = useSpring({
    from: {
      opacity: 0,
      transform: "translate(-4000px,-1000px)",
      rotateZ: 0,
    },
    to: { opacity: 1, transform: "translate(0,0)", rotateZ: 360 },
    delay: 4000,
    config: {
      duration: 1250,
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
            {/* {Error &&  <Notification success={false} text={Error.error} error promise={false} />} */}

          <div className={styles.login_container}>
            <img src={login} alt="img" className={styles.image}></img>
            <form style={styleprops} onSubmit={handleSubmit}>
              <div className={styles.login_inner}>
                <h1 className={styles.textlogin}>
                  {" "}
                  &lt;login <span className={styles.st}>/</span>&gt;
                </h1>
                <div className={styles.inputBox}>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={Data.email}
                    required
                    className={styles.input}
                  />
                  <span>Email</span>

                  <br></br>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={Data.password}
                    required
                    className={styles.input}
                  />
                  <span>Password</span>
                  <br></br>
              
                  <Button name="Login" />
                  <div className={styles.last}>
                    <h3>Don't have an Account?</h3>
                    <NavLink to="/signup">
                      <Button name="SignUp" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </animated.div>
      )}
    </>
  );
};

export default Login;
