
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
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.birthday,
        birthday:req.body.birthday,
        gender:req.body.gender,
        password_:req.body.password_,
        user_name_:req.body.user_name_
        
    }
// match password
//dfgf
    if(params.password == params.password2 ){
        connection.query(`INSERT INTO student(id,first_name,last_name,email,birthday,gender,password_,user_name_) VALUES('',
           " ${params.first_name}",
           " ${params.last_name}",
           " ${params.email}",
          " ${params.birthday}",
           "${params.gender}",
           " ${params.password_}",
            "${params.user_name_}"
         )`, function (err, result, fields) {
            if (err) throw err;
            res.json({
                result : result
             });
          });
    }else{
        res.json({
            data: "passwords not match"
        })
    }
    
    
}



module.exports = {login,signup}