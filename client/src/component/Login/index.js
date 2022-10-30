import React from 'react';
import styles from "./styles.module.css";
import Button from '../Button/button';
import { NavLink} from 'react-router-dom';
import { useState } from "react";
import {animated,useSpring } from 'react-spring';

//import { Link, useNavigate,NavLink } from "react-router-dom";

const Login = (props) => {
	const [Data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...Data, [input.name]: input.value });
	};
	const handleSubmit=(e)=>{
		e.preventDefault();
	};
  	const styleprops = useSpring(
	{
	from:{
			opacity:0,
			trasnform:'translate(-4000px,-1000px)',
	},
	opacity:1,
	trasnform:'translate(40px,0)',
	}
	)

  return (
	
     <div className={styles.login_container}>
	 
       <animated.div style={styleprops} className={styles.login_inner}>
       <animated.form  style={styleprops} onSubmit={handleSubmit}>
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

  )
}

export default Login