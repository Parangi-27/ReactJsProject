import { useState } from "react";
import axios from "axios";
import { Link, useNavigate,NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
//const f={data};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const {firstName,lastName,email,password}=data;
       const res= await fetch("http://localhost:8080/register",{
		method:"POST",
		headers:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify({
			firstName,lastName,email,password
		})
	  });
	  const  t=await res.json();
	  if(!t)
	  {
		console.log("erorrrrrr");
	  }
	  else{
      console.log(t);
      navigate("/login");
	  }
		
			
       

		//   const url = "http://localhost:8080/register";
		//  const  {data :res} = await axios.post(url, data);
			
			//console.log(res.message);
		
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<NavLink to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</NavLink>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Signup;