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
const getExamslist = (req,res)=>{
    
     exam.find()
         .then(docs =>{
             res.json({
                 data:docs
             })
         })
         .catch(err =>{
             res.json({
                 err: err
             })
         })   
}
// create exam request

const createExam = (req,res)=>{
   let params  = new exam({
        title : req.body.title,
        time : req.body.time,
        genre : req.body.genre,
        teacher : req.body.teacher_id
    })
    params
        .save()
        .then(result =>{
            res.json({
                data:result
            })
        }).catch(err =>{
            res.json({
                err : err
            })
    })
        
}

// findby id 

const getExambyid = (req,res)=>{
    let id = req.params.id
    exam.findById(id)
        .then(result =>{
            res.json({
                data:result
            })
        })
        .catch(err =>{
            res.json({
                err:err
            })
        })
}
module.exports = {getExam,createExam,getExamslist,getExambyid}