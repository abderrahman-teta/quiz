const express = require('express')

const exam = express.Router()

const {getExam,createExam,getExamslist} = require('./exam.controler')

exam.post('/getexam',getExam)

exam.post('/getexamlsit',getExamslist)

exam.post('/createexam',createExam)

module.exports = exam