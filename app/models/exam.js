const mongoose = require('mongoose')

const examSchema = new mongoose.Schema({
    title : {type : String, required : true},
    time : {type : String,required: true},
    genre: {type:String },
    teacher: { type:String ,required: true},
    questions : [], 
})


const Exam = module.exports = mongoose.model('Exam',examSchema);