const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    user_name:String,
    First_name:String,
    Last_name:String,
    job:String,
    gender:String
}) 

const teacherSch = module.exports = mongoose.model('teacherSch',teacherSchema)