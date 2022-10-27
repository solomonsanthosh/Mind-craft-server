const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const commentSchema = new schema({
  topic: { type: String, required: true, lowercase: true },
  owner: {
    type: ObjectId,
    ref: "User",
  },
  post:{
    type: ObjectId,
    ref: "Post",
  },
  content: {
    type:String,
    required:true
  }
},{ timestamps: { createdAt: 'created_at' } });
module.exports = mongoose.model("Comment", commentSchema);
