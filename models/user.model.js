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
    },
    image:{
        type:String,
    }
   })
   
   module.exports = mongoose.model('User',userSchema)