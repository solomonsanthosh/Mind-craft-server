const Coach = require("../models/coach.model");
const nodemailer = require("nodemailer");
exports.getCoach = async (req, res) => {
  try {
    
    
    const coach = await Coach.find().sort({experience:'descending'})
    res.json(coach)
  } catch (err) {
    console.log(err);
  }
};
exports.createCoach = async (req,res) =>{
  try{
    console.log('inside');
    const {name,email,experience,about,fee} = req.body
    const coach = new Coach({name:name,email:email,experience:experience,about:about,fee:fee}).save()
    res.json(coach)
  } catch (err) {
    console.log(err);
  }
}
exports.sendMail = async (req,res) => {
  try {
    const {name,topic,email,description} = req.body
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service:'gmail', // true for 465, false for other ports
      auth: {
        user: process.env.USER, // generated ethereal user
        pass: process.env.PASS, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.USER, // sender address
      to: email, // list of receivers
      subject: `${name} wants to book a session`, // Subject line
      text: description, // plain text body
       // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }catch (err) {
    console.log(err);
  }
 



}