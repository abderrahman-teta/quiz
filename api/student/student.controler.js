
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
        password_:req.body.password,
        user_name_:req.body.user_name
        
    }
// match password
//dfgf
    if(params.password == params.password2 ){
        connection.query("INSERT INTO student VALUES ('',?,?,?,?,?,?)",params, function (err, result, fields) {
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