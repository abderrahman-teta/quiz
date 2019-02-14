const express = require('express')

const exam = express.Router()

const {getExam,createExam,getExamslist,getExambyid} = require('./exam.controler')

exam.get('/getexam',getExam)

exam.get('/getexamlsit',getExamslist)

exam.post('/createexam',createExam)

exam.get('/:id',getExambyid)

module.exports = exam