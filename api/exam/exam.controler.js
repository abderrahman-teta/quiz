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
const getExamslist = async (req,res)=>{
    
    await exam.find({},(err,list)=>{
        if(!err){
            res.json({
                data:list
            })
        }else{
            res.json({
                err:"not existe"
            })
        }
    }).populate('nabil').exec()
    
}
// create exam request

module.exports = {getExam,getExamslist}