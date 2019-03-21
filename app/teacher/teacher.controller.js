const Teacher = require('../models/teacher')

const signup = (req,res) => {

    if(req.body.password == req.body.cpassword) {
        let teacher = new Teacher({
            First_name : req.body.fname,
            Last_name : req.body.lname,
            email : req.body.email,
            job : req.body.job,
            password : req.body.password,
        })
        teacher
            .save()
            .then(result =>{
                res.redirect('/login')
            })
            .catch(err =>{
                res.redirect('/signup')
            })
    }
    else{
     res.redirect('/signup') 
}
}

const login = (req,res)=>{
    let email = req.body.email

    Teacher.find()
           .then(teacher =>{
            if(teacher[0].password == req.body.password){
                res.redirect('/dashboard')
            }else{
                 res.render('login')
            }
           })
           .catch(err=>{
                res.redirect('/login')
           })
}

module.exports = {signup,login}
