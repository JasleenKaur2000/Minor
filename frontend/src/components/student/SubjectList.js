import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../styles/Home.css";
import Table from "./Table";

function SubjectList() {
  const [dataTable, setDataTable] = useState([]);
  //console.log(dataTable);  data in consol

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  const column = [
    { heading: "SubName" },
    { heading: "code" },
    { heading: "ThrName" },
  ];

  return (
    <div className="stu">
      <h1>Dynamic Table</h1>
      <Table data={dataTable} column={column} />
    </div>
  );
}

export default SubjectList;