const express = require('express')

const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 8080

/*app.use((req,res,next)=>{
    res.header('Access-Allow-Control-Origin','*');
    res.header('Access-Allow-Control-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization')
});*/

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const  db = require('./api/config/db')

const Router = require('./api/main.rout')

const studentRouter = require('./api/student/student.rout')

const teacherRouter = require('./api/teacher/teacher.rout')

const examRouter = require('./api/exam/exam.rout')

const teacherDashbordRouter = require('./api/teacher/teacher.dachboard.rout')

app.use('/student',studentRouter)

app.use('/teacher',teacherRouter)

app.use('/exam',examRouter)

app.use('/teacher/dashboard',teacherDashbordRouter)

app.all('*',(req,res)=>{res.json({ page:404 })})

app.listen(port , ()=>{
    console.log("magic hapens on port "+port)
})
module.exports = app