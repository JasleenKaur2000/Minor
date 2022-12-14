const express = require('express');
const router = express.Router();
const Subject = require('../models/subjectModal.js')


router.post('/', (req, res) => {
    const { courseCode, courseName, teacherName, department, syllabus, teacherId, offeredTo } = req.body;
    console.log(req.body)

    const tempSubject = {
        courseCode: courseCode,
        courseName: courseName,
        teacherName: teacherName,
        department: department,
        syllabus: syllabus,
        teacherId: teacherId,
        offeredTo: offeredTo
    }
    Subject.save(tempSubject);
     
})
router.get('/', (req, res) => {

    const { type } = req.body;
    if (type == 'ug') {
        sub = Subject.find({ $or: [{ offeredTo: 'ug' }, { offeredTo: 'both' }] })
    }
    else {
        sub = Subject.find({ $or: [{ offeredTo: 'pg' }, { offeredTo: 'both' }] })
    }
    res.json(sub)

})

module.exports = router;