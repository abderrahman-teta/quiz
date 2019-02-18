const express = require('express')

const exam = express.Router()

const {getExam,createExam,getExamslist,getExambyid,deleteexam} = require('./exam.controler')

exam.get('/getexam',getExam)

exam.get('/getexamlsit',getExamslist)

exam.post('/createexam',createExam)

exam.get('/:id',getExambyid)

exam.delete('/:id',deleteexam)

module.exports = exam