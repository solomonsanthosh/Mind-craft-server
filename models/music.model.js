const mongoose = require("mongoose");

const schema = mongoose.Schema;

const musicSchema = new schema({
  topic: { type: String, required: true, lowercase: true },
  song:{
    type:String
  },
  link:{
    type:String
  }


  
});

module.exports = mongoose.model('Music',musicSchema)
