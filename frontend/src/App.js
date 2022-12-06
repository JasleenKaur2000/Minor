//import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
// import Signup from "./components/signup/SignUp";
// import Student from "./components/student/Std_DashBoard";
// import Home from "./components/Home/Home";
// import GecInfo from "./components/teacher/GecInfo/GecInfo";
// import Student from "./components/student/Std_DashBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gec-info" element={<GecInfo />} /> */}
          {/* <Route path="/student" element={<Student />} /> */}
        </Routes>
      </BrowserRouter>
      {/*<div className="App">
    <header className="App-header">APPLICATION</header>
  </div>*/}
    </>
  );
}

export default App;
