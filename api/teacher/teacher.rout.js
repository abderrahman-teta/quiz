const express = require('express')

const teacher = express.Router()

const {signup} = require('./teacher.controler')

teacher.post('/signup',signup)

module.exports = teacher