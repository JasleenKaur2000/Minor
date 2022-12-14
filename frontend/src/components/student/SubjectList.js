import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../styles/Home.css";
import Table from "./Table";
import StudentNav from "./studentNav";

function SubjectList() {
  const [dataTable, setDataTable] = useState([]);
  console.log(dataTable);

  useEffect(() => {
    axios("http://10.10.33.21:8000/subjects")
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  const column = [
    { heading: "Course_Code", value: "courseCode" },
    { heading: "Name", value: "courseName" },
    { heading: "Syllabus", value: "syllabus" },
    { heading: "Department", value: "department" },
    { heading: "Teacher Name", value: "teacherName" },
  ];

  return (
    <>
      <StudentNav />
      <div className="stu">
        <h1>GEC Table</h1>

        <Table data={dataTable} column={column} />
      </div>
    </>
  );
}

export default SubjectList;
