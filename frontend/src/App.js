import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/SignUp";
import Student from "./components/student/Std_DashBoard";
import Home from "./components/Home/Home";
import GecInfo from "./components/teacher/GecInfo/GecInfo";

import Table from "./components/student/Table";
import Admin from "./components/admin/Admin_DashBoard";
import AddTeacher from "./components/admin/Add_teacher";
import AddStudent from "./components/admin/Add_student";

import React from "react";
import SubjectList from "./components/student/SubjectList";
import SubjectTable from "./components/student/SubjectTable";
import StudentDetails from "./components/student/StudentDetails";
import StudentNav from "./components/student/studentNav";
import SubjectDisplay from "./components/student/SubjectDisplay";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/teacher_dash" element={<Home />} />
          <Route path="/student_dash" element={<Student />} />
          <Route path="/admin_dash" element={<Admin />} />

          <Route path="/gec-info" element={<GecInfo />} />
          <Route path="/add_teacher" element={<AddTeacher />} />
          <Route path="/add_student" element={<AddStudent />} />

          <Route path="/table" element={<Table />} />
          <Route path="/student_nav" element={<StudentNav />} />
          <Route path="/subject_list" element={<SubjectList />} />
          <Route path="/subject_table" element={<SubjectTable />} />
          <Route path="/student_details" element={<StudentDetails />} />
          <Route path="/subject_display" element={<SubjectDisplay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
