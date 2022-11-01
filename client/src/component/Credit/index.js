import React from 'react';
import styles from "./styles.module.css";
import Button from '../Button/button';
import { NavLink} from 'react-router-dom';
import { useState,useEffect } from "react";
import {animated,useSpring } from 'react-spring';
import axios from "axios";
import Select from 'react-select';

const Credit = () => {
var countrylist=[
	{
		value:1,
		name:"manav"
	},
	{
		value:2,
		name:"ketan"
	}
];
    const [Data, setData] = useState({ amount: "", name: "" });
	const [loading, setload] = useState(true);
	const [error, setError] = useState("");
	const [post, setPost] = useState("");
	const [result,setvalue]=useState("");
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...Data, [input.name]: input.value });
	};
	const handleSubmit= async(e) =>{
		e.preventDefault();
    }
	const changevalue=(e)=>{
		setvalue(e.name);
	};
	
	useEffect(()=>{
		
		axios.get("http://localhost:8080/data")
		  .then(res=>{

			console.log(res.data);
			//const f=res.json();
				setPost(res.data);
		  },
		  error=>{console.log("error in fecting");})
		  
		
	},[])
	
  return (
    <div>
	<div className={styles.contmain}>
	        <span className={styles.color}>amount</span>
         	<input
             	type="number"
				name="amount"
				onChange={handleChange}
				value={Data.amount}
				required
            	className={styles.input}
				min="1"
		    />
           <Select options={countrylist} onChange={changevalue}/>
		   <center>
			<h1>{result}</h1>
		   </center>
			 
           
</div>

    </div>
  )
}

export default Credit