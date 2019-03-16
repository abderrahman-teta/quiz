const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    user_name:{Type:String},
    First_name:String,
    Last_name:String,
    job:String,
    gender:String,
    password:{Type:String},
    email:{Type:String}   
}) 

const Teacher = module.exports = mongoose.model('Teacher',teacherSchema)