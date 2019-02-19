

const login  = (req,res) => {
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