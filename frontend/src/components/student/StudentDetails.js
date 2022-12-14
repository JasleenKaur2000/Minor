import React, { useEffect, useState } from "react";
import "../student/student.css";
import StudentNav from "./studentNav";

import axios from "axios";

function StudentDetails() {
  const [userData, setUserData] = useState([]);

  // const loggedInUser = localStorage.getItem("user");
  // const Id = loggedInUser.userId;

  useEffect(() => {
    axios
      .get("http://192.168.43.37:8000/user")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <StudentNav />
      StudentDetails
      <div></div>
    </>
  );
}

export default StudentDetails;
