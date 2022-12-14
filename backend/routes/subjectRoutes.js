const express = require("express");
const router = express.Router();
const Subject = require("../models/subjectModal.js");

router.post("/", (req, res) => {
  const {
    courseCode,
    courseName,
    teacherName,
    department,
    syllabus,
    offeredTo,
  } = req.body;
  console.log(req.body);

  const tempSubject = new Subject({
    courseCode: courseCode,
    courseName: courseName,
    teacherName: teacherName,
    department: department,
    syllabus: syllabus,
    offeredTo: offeredTo,
  });
  tempSubject.save(tempSubject, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

router.get("/", (req, res) => {
  // const { type } = req.body;
  // console.log(req.body)
  // if (type == "ug") {
  //   sub = Subject.find({ $or: [{ offeredTo: "ug" }, { offeredTo: "both" }] });
  // } else {
  //   sub = Subject.find({ $or: [{ offeredTo: "pg" }, { offeredTo: "both" }] });
  // }
  let type="ug"
  if(type=="ug")
  {
    Subject.find({ offeredTo:{ $in: ["pg","both"]}},(err,data)=>{
      if(err)res.status(404).send("No Data Found")
      res.send(data)
    });
  }
 Subject.find({},(err,data)=>{
  console.log(data)
 })
  // res.(sub);
  // console.log("Hey");
  // res.send("Hi");
});

module.exports = router;
