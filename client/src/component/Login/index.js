import React from "react";
import styles from "./styles.module.css";
import Button from "../Button/button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";

//import { Link, useNavigate,NavLink } from "react-router-dom";

const Login = (props) => {
  const [Data, setData] = useState({ email: "", password: "" });
  const [loading, setload] = useState(true);
  const [error, setError] = useState("");
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
      localStorage.setItem("jtwtoken", JSON.stringify(y.token));
      localStorage.setItem("loginuser", JSON.stringify(y.loginuser));
      //  setLogin("jwtokenlocal",y.token);

      if (y.token && y) {
        console.log("logged in");
        // navigate("/");
        window.location.href = "/";
      } else {
        console.log("error in  respsone or token is not genearte properly");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const styleprops = useSpring({
    from: {
      opacity: 0,
      transform: "translate(-4000px,-1000px)",
    },
    opacity: 1,
    transform: "translate(0,0)",
  });
  useEffect(() => {
    setTimeout(() => {
      setload(false);
    }, 1000);
  });

  return (
    <>
      {/* {{loading } && <img  alt="loading..."src={logo}></img>} */}
      <div className={styles.login_container}>
        <animated.div style={styleprops} className={styles.login_inner}>
          <animated.form style={styleprops} onSubmit={handleSubmit}>
            <h1 className={styles.textlogin}> Login</h1>
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
              {error && <div className={styles.error_msg}>{error}</div>}

              <Button name="Login" />
              <div className={styles.last}>
                <h3>Don't have an Account?</h3>
                <NavLink to="/signup">
                  <Button name="SignUp" />
                </NavLink>
              </div>
            </div>
          </animated.form>
        </animated.div>
      </div>
    </>
  );
};

export default Login;
