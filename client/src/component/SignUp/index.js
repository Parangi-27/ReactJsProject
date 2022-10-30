import React from 'react';
import styles from "./styles.module.css";
import Button from '../Button/button';
import { useState } from "react";
import {animated,useSpring } from 'react-spring';
import { Link } from "react-router-dom";

const SignUp = (props) => {
	const[data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmkklllPassword:"",
        phoneNo:""
    });
    const [error, setError] = useState(""); 
    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
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

    return(
        <div className={styles.signup_container}>
            <animated.div style={styleprops} className={styles.signup_inner}>
                <animated.form  style={styleprops} onSubmit={handleSubmit}>
						<h1 className={styles.textlogin}> SignUp</h1>
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
					    <br></br>
						<input 
							type="name"
							name="name"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<span>Name</span>
					    <br></br>
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
							type="confirmPassword"
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
                            />
						<span>Contact No.</span>
						<br></br>
						{error && <div className={styles.error_msg}>{error}</div>}
						<Button name="Sign Up" />
						<div className={styles.last}>
						<h3>Already have an Account?</h3>
						<Link to="/login">
							<Button name="Login" />
						</Link>
						</div>
						</div>
					</animated.form>
       </animated.div>
        </div>

    )
};

export default SignUp;

