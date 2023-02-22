import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

function Table1() {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);
  let user = JSON.parse(localStorage.getItem("user"));
  const { userId } = user;
  const { type } = user;
  const [gecData, setGecData] = useState({
    userId: userId,
    gecCode: "",
  });

  const saveGec = async (coursecode) => {
    gecData.gecCode = coursecode;
    // console.log(gecData.userId);
    console.log(gecData);

    await axios
      .post("http://192.168.43.37:8000/choose-gec", gecData)
      .then((res) => {
        console.log(res);
        setGecData(res);
        // setGecData(res);
        alert("Gec Saved Successfully");
        navigate("/subject_display");
      })
      .catch((err) => console.log(err));
  };

  const getSubjects = async () => {
    try {
      const response = await axios.get("http://192.168.43.37:8000/subjects", {
        params: {
          type: type,
        },
      });
      setSubjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { name: "Course_Code", selector: (row) => row.courseCode, sortable: true },
    { name: "Name", selector: (row) => row.courseName },
    { name: "Syllabus", selector: (row) => row.syllabus },
    { name: "Department", selector: (row) => row.department },
    { name: "Teacher Name", selector: (row) => row.teacherName },
    {
      name: "Select this GEC",
      cell: (row) => (
        <button
          className="btn btn-primary"
          onClick={() => saveGec(row.courseCode)}
        >
          Select as GEC
        </button>
      ),
    },
  ];

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <DataTable
      columns={columns}
      data={subjects}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="300px"
      highlightOnHover
    />
  );
}

export default Table1;
