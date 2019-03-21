const express = require('express')

const teacher = express.Router()

const {signup,login} = require('./teacher.controller')

teacher.post('/signup',signup)

teacher.post('/login',login)

module.exports = teacher