const express = require('express')

const bodyParser = require('body-parser')

const app = express()

const morgan = require('morgan')

const path = require('path')

const port = process.env.PORT || 3002

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.set("view engine", "pug")

app.set("views", path.join(__dirname, "views"))

app.use(express.static( path.join(__dirname, "public")))

const db = require('./app/config/db')

const Router = require('./app/main.rout')

const examRouter = require('./app/exam/exam.rout')

const teacherRouter = require('./app/teacher/teacher.rout')

app.use('/',Router)

app.use('/exam',examRouter)

app.use('/teacher',teacherRouter)

app.all('*',(req,res)=>{res.render('404')})

app.listen(port , ()=>{
    console.log("magic hapens on port "+port)
})
module.exports = app