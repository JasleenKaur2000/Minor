const express = require('express');
const router = express.Router();
const Subject = require('../models/subjectModal.js')

router.post('/', async (req, res) => {
    const { courseCode, courseName, teacherName, department, syllabus, teacherID } = req.body;
    console.log(req.body)
    const tempSubject = {
        courseCode: courseCode,
        courseName: courseName,
        teacherName: teacherName,
        department: department,
        syllabus: syllabus,
        teacherID: teacherID
    }
    console.log(tempSubject)
    const subject = new Subject(tempSubject)

    const data=await subject.save( (err,response)=>{
        if(err) console.log("Error Occured");
        else console.log("Data Added");
    });

    res.send("Got Your Request")
    // Subject.save(tempSubject,(err,response)=>{
    //     if(err) res.send("Error Occured");
    //     res.send("Subject Saved")
    // });
})
router.get('/', (req, res) => {
    sub = Subject.find({},(err,data)=>{
        if(err) console.log("Error is present",err)
        res.json(data)
    });
})

module.exports = router;