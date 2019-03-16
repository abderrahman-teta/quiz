
const Exam = require('./models/exam')

const Home = async (req,res)=>{
    const list = await Exam.find({})
    console.log(list);
    res.render('index',{list:list})
}

module.exports = Home