const mongoose = require("mongoose");

const schema = mongoose.Schema;

const activitySchema = new schema({
  topic: { type: String, required: true, lowercase: true },
  title:{
    type:String
  },
  duration:{
    type:String
  }


  
});

module.exports = mongoose.model('Activity',activitySchema)