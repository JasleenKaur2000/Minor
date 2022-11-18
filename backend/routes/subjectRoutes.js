const express = require('express');
const router = express.Router();
const Subject = require('../models/subjectModal.js')

router.post('/', (req, res) => {
    const { courseCode, courseName, teacherName, department, syllabus } = req.body;
    const tempSubject = {
        courseCode: courseCode,
        courseName: courseName,
        teacherName: teacherName,
        department: department,
        syllabus: syllabus
    }
    Subject.save(tempSubject);

})

module.exports = router;