import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SubjectDisplay() {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  const { userId } = user;

  const [data, getData] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    axios
      .get(`http://192.168.43.37:8000/user/${userId}`)
      .then((res) => {
        console.log(res.data);
        const subject = res.data.data[0].gecCode;
        getData(subject);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data);

  const myStyle = {
    padding: 50,
  };

  return (
    <div>
      <h1 style={myStyle}>You have successfully selected your GEC</h1>
      <h2 style={myStyle}>Your GEC Code is :{data}</h2>
      <Button
        onClick={() => {
          navigate("/student_details");
        }}
      >
        Go to dashboard
      </Button>
    </div>
  );
}

export default SubjectDisplay;
