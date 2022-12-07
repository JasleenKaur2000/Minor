import React from "react"
import "../../frontend/src/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/SignUp";
import Home from "./components/Home/Home";
import GecInfo from "./components/teacher/GecInfo/GecInfo";
import Admin from "./components/admin/Admin_DashBoard";
import AddTeacher from "./components/admin/Add_teacher";
import AddStudent from "./components/admin/Add_student";
import Student from "./components/student/Std_DashBoard";
import Table from "./components/student/Table";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gec-info" element={<GecInfo />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add_teacher" element={<AddTeacher />} />
          <Route path="/add_student" element={<AddStudent />} />
          <Route path="/student" element={<Student />} />
          <Route path="/table" element={<Table />} />

        </Routes>
      </BrowserRouter>
      {/*<div className="App">
    <header className="App-header">APPLICATION</header>
  </div>*/}
    </>
  );
}

export default App;
