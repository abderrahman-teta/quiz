const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    First_name:String,
    Last_name:String,
    job:String,
    password:String,
    email:String
}) 

const Teacher = module.exports = mongoose.model('Teacher',teacherSchema)