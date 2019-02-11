const express = require('express')

const student = express.Router()

const {login,signup} = require('./student.controler')

student.post('/login',login)

student.post('/signup',signup)

module.exports = student