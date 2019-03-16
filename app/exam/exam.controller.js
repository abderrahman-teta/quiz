const Exam = require('../models/exam')

const Teacher = require('../models/teacher')

const getExam =  (req,res)=>{
    if(req.query.title !=''){
        let params = {
            title:req.query.title
        }
        Exam.find(params)
        .then(doc =>{
            res.render('list',{data:doc})
            .catch(err =>{
                res.json({
                    err:err
                })
            })
        })
    }
    else{
        let genre = req.query.genre
        
        genre = genre.replace('+',' ')
        
        let params = {
            genre:genre
        }
        Exam.find(params)
        .then(doc =>{
            res.render('list',{data:doc})
            .catch(err =>{
                res.json({
                    err:err
                })
            })
        })
    }
    
    
    
    
}
const getExamslist = (req,res)=>{
    
    Exam.find({})
         .exec((err,exams)=>{
             if(err) return handleError(err)
             res.json({
                exams : exams
             })
         })   
}
// create exam request

const createExam = (req,res)=>{
   let exam  = new Exam({
        title : req.body.title,
        time : req.body.time,
        genre : req.body.genre,
        teacher : req.body.teacher_id
    })
    exam
        .save()
        .then(result =>{
            const teachet = new Teacher({
                exam : $push(exam)
            })
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
    const _id = req.params.id
    Exam.findById(_id)
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
// delete exam

const deleteexam = (req,res)=> {
    const _id = req.params.id
    Exam.deleteMany({})
        .then(result =>{
            res.json({
                data:result,
                message : 'deleting success'
            })
        })
        .catch( err =>{
            res.json({
                err : err,
                message : 'deleting failed'
            })
        })
}
module.exports = {getExam,createExam,getExamslist,getExambyid,deleteexam}