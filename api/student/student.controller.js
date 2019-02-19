
const connection = require('../config/db')
// login function 
const login =  async(req,res) =>{
    const user_name = req.body.user_name_
    const password = req.body.password_
    console.log(user_name,password);
    if (user_name && password) {
		connection.query('SELECT * FROM student WHERE user_name_ = ? AND password_ = ?', [user_name, password], function(error, results, fields) {
			if (results.length > 0) {
				res.json({
                    result: 'welcome to your profile',
                });
			} else {
				res.json({
                    err: 'Incorrect Username and/or Password!'
                    
                });
			}			
			res.end();
		});
	} else {
		res.json('Please enter Username and Password!');
		res.end();
	}

    
}

// signup function
const signup = (req,res) =>{

    params = [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.birthday,
        req.body.gender,
        req.body.password_,
        req.body.user_name_,
        req.body.password_2
    ]
// match password
//dfgf
    if(params[5] == params[7]){
        connection.query(`INSERT INTO student VALUES('',?,?,?,?,?,?,?)`,params, function (err, result, fields) {
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