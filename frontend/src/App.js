//import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/SignUp";
import Home from "./components/Home/Home";
import GecInfo from "./components/teacher/GecInfo/GecInfo"

function App() {
  return (
    <>
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/home' element={<Home />} />
    <Route path='/gec-info' element={<GecInfo/>}/>
  </Routes>
  </BrowserRouter>
   { /*<div className="App">
    <header className="App-header">APPLICATION</header>
  </div>*/}
    </>
  );
}

export default App;

