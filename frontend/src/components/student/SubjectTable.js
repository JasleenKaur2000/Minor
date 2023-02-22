import React from "react";
import "../../styles/Home.css";
import StudentNav from "./studentNav";
import Table1 from "./Table1";

function SubjectTable() {
  return (
    <>
      <StudentNav />
      <div className="stu">
        <h1>GEC Table</h1>

        <Table1 />
      </div>
    </>
  );
}

export default SubjectTable;
