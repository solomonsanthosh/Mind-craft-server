const mongoose = require("mongoose");

const schema = mongoose.Schema;

const storySchema = new schema({
  topic: { type: String, required: true, lowercase: true },
  owner: {
    type: mongoose.ObjectId,
    ref: "User",
  },
  story: {
    type: String,
    required: true,
  },
},{ timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model("Story", storySchema);
