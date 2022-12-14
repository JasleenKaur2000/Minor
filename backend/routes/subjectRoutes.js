const express = require('express');
const router = express.Router();
const Subject = require('../models/subjectModal.js')

router.post('/', (req, res) => {
    const { courseCode, courseName, teacherName, department, syllabus, teacherId, offeredTo } = req.body;
    const tempSubject = {
        courseCode: courseCode,
        courseName: courseName,
        teacherName: teacherName,
        department: department,
        syllabus: syllabus,
        teacherId: teacherId,
        offeredTo: offeredTo
    }
    console.log(tempSubject)
    const SubjectObject = new Subject(tempSubject)
    SubjectObject.save().then(() => {
        res.json({
            data: SubjectObject
        })
    });

})
router.get('/', async (req, res) => {

    const { type } = req.body;
    let sub;
    if (type == 'ug') {
        sub = await Subject.find({ $or: [{ offeredTo: 'ug' }, { offeredTo: 'both' }] })
    }
    else {
        sub = await Subject.find({ $or: [{ offeredTo: 'pg' }, { offeredTo: 'both' }] })
    }
    res.send(sub)
})

module.exports = router;