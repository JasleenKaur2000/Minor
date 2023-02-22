import React, { useEffect, useState } from "react";
import "../student/student.css";
import StudentNav from "./studentNav";

import axios from "axios";

function StudentDetails() {
  const [userData, getUserData] = useState('');

  let user = JSON.parse(localStorage.getItem("user"));
  const { userId } = user;

  useEffect(() => {
    axios
      .get(`http://192.168.43.37:8000/user/${userId}`)
      .then((res) => {
        const subject = res.data.data[0].gecCode;
        getUserData(subject);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  //make below components get data from backend

  return (
    <>
      <StudentNav />
      StudentDetails
      <div>
        <ul>
          <li>{userId}</li>
          <li>{user.userName}</li>
          <li>{user.userEmail}</li>
          <li>Your GEC is {userData}</li>
        </ul>
      </div>
    </>
  );
}

export default StudentDetails;
