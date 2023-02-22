import React from "react";
import "../../styles/Home.css";
import "../../styles/student.css";
import { Paper } from "@mui/material";
import StudentNav from "./studentNav";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Student() {
  let user = JSON.parse(localStorage.getItem("user"));
  const { userId, department } = user;

  const navigate = useNavigate();

  return (
    <>
      <StudentNav />
      <div>
        <br></br>
        <div>
          <Paper elevation={24}>
            <div id="head">
              <h1 style={{}}>Student Dashboard for {userId} </h1>
            </div>
          </Paper>
        </div>
        <div>
          <br></br>
          <h2>Select your general elective subject for ongoing semester.</h2>

          <br></br>
          <p>Department:{department}</p>
          <br></br>
          <Button
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
            }}
          >
            Logout
          </Button>

          <br></br>
        </div>
      </div>
    </>
  );
}

export default Student;
