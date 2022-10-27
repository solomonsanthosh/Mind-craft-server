const Test = require('../models/test.model')
const User = require('../models/user.model')

exports.getTest = async (req,res) => {
    
    try {
        const {topic} = req.params
         
        
        const test = await Test.findOne({topic:topic})
       
        res.json(test)
    } catch (err) {
        console.log(err);
    }
    
} 

exports.testResults = async (req,res) => {

    try {
        const {email,ans} = req.body
        var yesCount = 0
        var severity;
        
        ans.forEach(element => {
            if(element == 'Yes') {
                yesCount = yesCount + 1
            }
        });

        if(yesCount >= 7) {
            severity = 'high'
        }
        else if (yesCount < 4) {
            severity = 'low'
        } else {
            severity = 'moderate'
        }
        const user = await User.findOneAndUpdate({email:email},{severity:severity})

    } catch (err) {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    }
}