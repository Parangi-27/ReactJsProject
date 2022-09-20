// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Login from './Components/Login';
import Button from './Components/Button';
function App() {
  const adminuser={
    email:"admin@admin123",
    password:"admin123"
  }
  const [user,setUser]=useState({name:"", email:""});
  const [error, setError]=useState("");

const login =details=>{
  console.log(details);
}
const logout=()=> 
{
  console.log("Logout");
}
  return (
    <div className="app">{
      (user.email !="") ? (
      <div className="welcome">
        <h2>
          Welcome, <span>{user.name}
          </span>
        </h2>  
        <Button value="Logout"/>
      </div>

    ) :  (<Login  log={login} error={error} />) }
    
    </div>    
  );
}

export default App;
