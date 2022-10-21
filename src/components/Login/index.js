import { useState } from "react";

import { Link, useNavigate,NavLink } from "react-router-dom";

//import { Link useNav} from "react-router-dom";
import styles from "./styles.module.css";


const Login = () => {
	
	const [Data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...Data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			
		const {email,password}=Data;
		  const res= await fetch("/login",{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
		            email,password
			})
		  });
		//  res.json().then(data)=>{}
       const y= await res.json();
      localStorage.setItem("jtwtoken",JSON.stringify(y.token));
	//  setLogin("jwtokenlocal",y.token);

	if(y.token && y)
	{
		console.log("logged in");
		// navigate("/");
		window.location.href="/";
	}
	else
	{
          console.log("error in  respsone or token is not genearte properly");
	}
		//  const  t=await res.json();
		    	// const url = "http://localhost:8080/api/auth";
			// const { data: res } = await axios.post(url, Data);
			// localStorage.setItem("token", res.data);

		//	window.location = "/";
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={Data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={Data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<NavLink to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Login;