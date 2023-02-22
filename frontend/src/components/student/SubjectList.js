import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../styles/Home.css";
import Table from "./Table";
import StudentNav from "./studentNav";

function SubjectList() {
  const [dataTable, setDataTable] = useState([]);
  console.log(dataTable);

  let user = JSON.parse(localStorage.getItem("user"));
  const { type } = user;

  useEffect(() => {
    axios
      .get("http://10.10.33.245:8000/subjects", {
        params: {
          type: type,
        },
      })
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, [type]);

  const column = [
    { heading: "Course_Code", value: "courseCode" },
    { heading: "Name", value: "courseName" },
    { heading: "Syllabus", value: "syllabus" },
    { heading: "Department", value: "department" },
    { heading: "Teacher Name", value: "teacherName" },
  ];

  let gecCode = "BT-CS201";
  console.log(gecCode);

  return (
    <>
      <StudentNav />
      <div className="stu">
        <h1>GEC Table</h1>

        <Table data={dataTable} column={column} gecCode={gecCode} />
      </div>
    </>
  );
}

export default SubjectList;
