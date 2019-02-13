const mongoose = require('mongoose');

const teacher = require('./teacher');

const examSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required: true
    },
    genre: {
        type:String
    },
    teacher :{
        type: String,
        ref:teacher
    },
    questions: Array,
})


const exam = module.exports = mongoose.model('exam',examSchema);