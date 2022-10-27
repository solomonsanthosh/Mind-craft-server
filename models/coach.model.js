const mongoose = require("mongoose");

const schema = mongoose.Schema;

const coachSchema = new schema({
  
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    fee:{
        type:Number,
        required:true
    }


  
});

module.exports = mongoose.model('Coach',coachSchema)