const express = require('express')

const teacher = express.Router()

const {signup,login} = require('./teacher.controler')

teacher.post('/login',loogn)

teacher.post('/signup',signup)

module.exports = teacher