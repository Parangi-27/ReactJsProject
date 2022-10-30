import './App.css';
import Login from './component/Login'
import Home from './component/Home'
import SignUp from './component/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/login" element={<Login/>} />
      
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
