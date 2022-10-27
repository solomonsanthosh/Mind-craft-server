const mongoose = require("mongoose");

const schema = mongoose.Schema;

const testSchema = new schema({
  topic: { type: String, required: true, lowercase: true },
  questions : {
    type: Array
  }
});

module.exports = mongoose.model('Test',testSchema)
