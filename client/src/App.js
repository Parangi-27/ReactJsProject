import './App.css';
import Login from './component/Login'
import Home from './component/Home'
import SignUp from './component/SignUp';
import{Route,Routes,Navigate,BrowserRouter} from 'react-router-dom';
import Listinfo from './component/Listinfo';
import Form from './component/Form';

function App() {
  
 var loginu =localStorage.getItem("jtwtoken");
 
 console.log(loginu);
  return (
   <div>
    <BrowserRouter>
      <Routes>
      { loginu && <Route path="/" exact element={<Home />}/>}
     
        <Route  path="/signup" element={<SignUp/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/detail" element={<Listinfo/>} />
        <Route  path="/Creditfrom" element={<Form/>} />
        <Route path="/" exact element={<Navigate replace to="/login"/>}/>
      
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
