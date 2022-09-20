import React, { useState }  from 'react'
import Field from './Field'
import Button from './Button'
export default function Login(props) {
    const [details,setDetails]= useState({name:"",email:"",password:""});
const submithandler= e=>{
    e.preventDefault();
    props.log(details);
}
    return (
        <form onSubmit={submithandler}>
        <div className="form-inner"><h2>
        LOGIN
        </h2>
        <div className="form-inner">
        <Field name="Username" type="text" id="username" />
        </div>
        <div className="form-group">
        <Field name="Password" type="password" id="psw" />
        </div>
        <div className="form-group">
        <Field name="Email" type="eamil" id="email" />
        </div>
        <Button value="submit" name="Login" />
        </div>
        </form>
    )
}
