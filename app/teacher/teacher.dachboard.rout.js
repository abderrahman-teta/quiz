const express = require('express')

const teacherDashboard = express.Router()

teacherDashboard.get('/',(req,res)=>{
    res.json({
        teacherDashboard:true
    })
})

module.exports = teacherDashboard