const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    user_name:String,
    first_name:String,
    last_name:String,
    birthday:String,
    study:String,
    password:String 
});

const studentSch = module.exports = mongoose.model('studentSchema',studentSchema);