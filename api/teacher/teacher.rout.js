const express = require('express')

const teacher = express.Router()

const {signup,login} = require('./teacher.controller')

teacher.post('/login',login)

teacher.post('/signup',signup)

module.exports = teacher