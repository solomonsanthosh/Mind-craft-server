const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postSchema = new schema({
  topic: { type: String, required: true, lowercase: true },
  owner: {
    type: ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  comments: [{ type : ObjectId, ref: 'Comment' }]
},{ timestamps: { createdAt: 'created_at' } });
module.exports = mongoose.model("Post", postSchema);
