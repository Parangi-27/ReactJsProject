import{Route,Routes,Navigate} from 'react-router-dom';
import Main from './components/Main';
import Siginup from './components/Siginup';
import Login from './components/Login';
import { useState, useEffect} from 'react';
import Loader from "react-js-loader";

function App() {

  

 var loginu =localStorage.getItem("jtwtoken");
 
 
  console.log(loginu)
  return (
    <div >
    
                <Loader type="box-rotate-x" bgColor={"black"} title={"box-rotate-x"} color={'#FFFFFF'} size={100} />
            
    <Routes>
    
      { loginu && <Route path="/" exact element={<Main />}/>}
     <Route path="/signup" exact element={<Siginup/>}/>
     <Route path="/login" exact element={<Login/>}/>
      <Route path="/" exact element={<Navigate replace to="/login"/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
