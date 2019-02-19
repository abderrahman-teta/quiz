

const login  = (req,res) => {
    prams = {
       user_name : req.body.user_name,
       Fisrt_name : req.body.Fisrt_name,
       Last_name : req.body.Last_name,
       job : req.body.job
   }
    teacherSch.create(prams,(err,teacher)=>{
       if(!err){
           res.json({
               data:teacher
           })
       }else{
           res.json({
               err:err
           })
       }
   })

}
const signup = (req,res) => {
     prams = {
        user_name : req.body.user_name,
        Fisrt_name : req.body.Fisrt_name,
        Last_name : req.body.Last_name,
        job : req.body.job
    }
     teacherSch.create(prams,(err,teacher)=>{
        if(!err){
            res.json({
                data:teacher
            })
        }else{
            res.json({
                err:err
            })
        }
    })

}

module.exports = {signup,login}