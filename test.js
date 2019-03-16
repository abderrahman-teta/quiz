const mongoose = require('mongoose')

mongoose.connect('mongodb://abderrahman:abdo12345678@ds145194.mlab.com:45194/memoire');

const examSchema = new mongoose.Schema({
    title : {type : String, required : true},
    time : {type : String,required: true},
    genre: {type:String },
    teacher: { 
        _id:String ,
        user_name: String,
        First_name: String,
        Last_name: String
    },
    questions : [], 
})

const Exam = module.exports = mongoose.model('Exam',examSchema);

const java = new Exam({
    title : "java",
    time : "1h30",
    genre : "programing language",
    teacher : {
        _id:"1",
        user_name : "abdouteta",
        Firt_name :"abderrahman",
        Last_name :"teta"   
    },
    questions : [
        {type_q:"boolean",Q1:"java is oop",a:"true"}
    ], 
})
java.save().then((exam)=>{
    console.log(exam);
    
})