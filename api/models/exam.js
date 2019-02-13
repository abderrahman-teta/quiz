const mongoose = require('mongoose');

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
        type: mongoose.Schema.Types.ObjectId,
        ref:'teacher'
    },
    questions:{
        type: Array,
        default : []
    }
    
})


const exam = module.exports = mongoose.model('exam',examSchema);