const express = require('express')

const exam = express.Router()

const {getExam,createExam,getExamslist,getExambyid,deleteexam} = require('./exam.controller')

exam.get('/search',getExam)

exam.get('/getexamlist',getExamslist)

exam.post('/createexam',createExam)

exam.route('/deleteAll')
    .get(getExambyid)
    .delete(deleteexam)

//exam.delete('/:id',getExambyid)

module.exports = exam