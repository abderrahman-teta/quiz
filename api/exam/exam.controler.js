const exam = require('../models/exam')

const getExam = async (req,res)=>{
    prams = {
        title:req.body.title,
    }
    await exam.find(prams,(err,exam)=>{
        if(!err){
            res.json({
                data:exam
            })
        }else{
            res.json({
                err:"not existe"
            })
        }
    })
    
}

// 
const getExamslist = (req,res)=>{
    
     exam.find({},(err,list)=>{
        if(!err){
            res.json({
                data:list
            })
        }else{
            res.json({
                err:"not existe"
            })
        }
    })
    
}
// create exam request

const createExam = (req,res)=>{
    prams = {
        title : req.body.title,
        time : req.body.time,
        genre : req.body.genre,
        teacher : req.body.teacher_id
    }
     exam.create(prams,(err,exam)=>{
        if(!err){
            res.json({
                data:exam
            })
        }else{
            res.json({
                err:err
            })
        }
    })
}
module.exports = {getExam,createExam,getExamslist}