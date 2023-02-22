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

// router.get("/", (req, res) => {
//   const { type } = req.body;
//   console.log(type)
//   // console.log(req.body)
//   // if (type == "ug") {
//   //   sub = Subject.find({ $or: [{ offeredTo: "ug" }, { offeredTo: "both" }] });
//   // } else {
//   //   sub = Subject.find({ $or: [{ offeredTo: "pg" }, { offeredTo: "both" }] });
//   // }
//   //////////////////////
//   if(type=="ug")
//   {
//     Subject.find({ offeredTo:{ $in: ["ug","both"]}},(err,data)=>{
//       if(err)res.status(404).send("No Data Found")
//       res.send(data)
//     });
//   }
//  Subject.find({},(err,data)=>{
//   console.log(data)
//  })
//  //////////////////////
//   // res.(sub);
//   // console.log("Hey");
//   // res.send("Hi");
// });

// router.get("/", async (req, res) => {
//   const { type } = req.body;
//   console.log(type);
//   let sub;
//   if (type == "pg") {
//     sub = await Subject.find(
//       { offeredTo: { $in: ["pg", "both"] } },
//       (err, data) => {
//         if (err) res.status(404).send("No Data Found");
//         res.send(data);
//       }
//     );
//   } else {
//     sub = await Subject.find(
//       { offeredTo: { $in: ["ug", "both"] } },
//       (err, data) => {
//         if (err) res.status(404).send("No Data Found");
//         res.send(data);
//       }
//     );
//   }
//   res.send(sub);
// });

router.get("/", async (req, res) => {
  const  type  = req.query.type;
  console.log(type);

  let sub;
  if (type == "pg") {
    sub = await Subject.find({
      $or: [{ offeredTo: "pg" }, { offeredTo: "both" }],
    });
  } else {
    sub = await Subject.find({
      $or: [{ offeredTo: "ug" }, { offeredTo: "both" }],
    });
  }
  res.send(sub);
});

// router.get("/", async (req, res) => {
//   const { type } = req.body;
//   let sub;
//   if (type == "ug") {
//     sub = await Subject.find({
//       $or: [{ offeredTo: "ug" }, { offeredTo: "both" }],
//     });
//   } else {
//     sub = await Subject.find({
//       $or: [{ offeredTo: "pg" }, { offeredTo: "both" }],
//     });
//   }
//   res.send(sub);
// });

module.exports = router;
