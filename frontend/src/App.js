import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/SignUp";
import Student from "./components/student/Std_DashBoard";
import Home from "./components/Home/Home";
import GecInfo from "./components/teacher/GecInfo/GecInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/teacher_dash" element={<Home />} />
          <Route path="/student_dash" element={<Student />} />
          <Route path="/admin_dash" element={<Home />} />
          <Route path="/gec-info" element={<GecInfo />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
