import React from "react";
import "../../styles/Home.css";
import "../../styles/student.css";
import { Paper } from "@mui/material";
import StudentNav from "./studentNav";

function Student() {
  return (
    <>
      <StudentNav />
      <div>
        <br></br>
        <div>
          <Paper elevation={24}>
            <div id="head">
              <h1 style={{}}>Student Dashboard </h1>
            </div>
          </Paper>
        </div>
        <div>
          <br></br>
          <h2>Select your general elective subject for ongoing semester.</h2>

          <br></br>
          <p>Department:CSE B.Tech</p>

          {/* make it dynamic */}

          <br></br>
        </div>
      </div>
    </>
  );
}

export default Student;
