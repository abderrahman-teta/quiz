const express = require('express')

const Home = require('./main.controller')

const router = express.Router()

router.get('/',Home)

router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/signup',(req,res)=>{
    res.render('signup')
})

module.exports = router