const mongoose = require('mongoose')


userSchema = new mongoose.Schema({

    name: {
     type: String,
     required:true,
    },
    email:{
    type: String,
    required:true
    },
    topic:{
        type: String,
        lowercase:true
    },
    severity:{
        type:String,
        lowercase:true
    }
   })
   
   module.exports = mongoose.model('User',userSchema)