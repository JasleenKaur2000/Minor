const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    courseCode: {
        type: String
    },
    courseName: {
        type: String,
    },
    syllabus: {
        type: String,
    },
    department: {
        type: String,
    },
    teacherName: {
        type: String
    },
    teacherId: {
        type: String,
    },
    offeredTo: {
        type: String,
        default: 'both',
        enum: ['ug', 'pg', 'both']
    }
})

const Subject = mongoose.model('subject', subjectSchema)

module.exports = Subject;