
const connection = require('../config/db')
// login function 
const login =  async(req,res) =>{
    const user_name = req.body.user_name
    const pass1 = req.body.password
   
    connection.query("SELECT * FROM student", function (err, result, fields) {
        if (err) throw err;
        res.json({
            result : result
         });
      });

    
}

// signup function
const signup = (req,res) =>{

    params = {
        user_name:req.body.user_name,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        birthday:req.body.birthday,
        password:req.body.password,
        password2:req.body.password2
    }
// match password
//dfgf
    if(params.password == params.password2 ){
        studentSch.create(prams,(err,field)=>{
            if(err){
                res.json({
                    data: err
                })
            }
            else{
                res.json({
                    data: field
                })
            }
        })

    }else{
        res.json({
            data: "passwords not match"
        })
    }
    
    
}



module.exports = {login,signup}