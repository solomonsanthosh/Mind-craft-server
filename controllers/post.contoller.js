const PostModel = require("../models/post.model");
const mongoose = require("mongoose");
const Comment = require("../models/comment.model");
exports.createPost = async (req, res) => {
  try {
    const { Post } = req.body;
    console.log("====================================");
    console.log(Post);
    console.log("====================================");
    const post = new PostModel(Post).save();
    res.json(post)
    
  } catch (err) {
    console.log("====================================");
    console.log(err);
    console.log("====================================");
  }
};
exports.getPost = async (req, res) => {
  try {
    const { topic } = req.params;

    const post = await PostModel.find(
      { topic: topic },
      {},
      {sort: {updatedAt: -1}}
    ).populate("owner");
    console.log("====================================");
    console.log(post);
    console.log("====================================");
    res.json(post);
  } catch (err) {
    console.log("====================================");
    console.log(err);
    console.log("====================================");
  }
};

exports.createComment = async (req, res) => {
  try {
    var myId = mongoose.Types.ObjectId();
    const { postid, content } = req.body;
    console.log(content);
    const comment = new Comment({
      _id: myId,
      topic: content.topic,
      owner: content.owner,
      post: content.post,
      content: content.content,
    }).save();
    const post = await PostModel.findById({ _id: postid });
    var commentNew = post.comments;
    commentNew.push(myId);

    const post2 = await PostModel.findOneAndUpdate(
      { _id: postid },
      { comments: commentNew }
    );

    res.json(comment);
  } catch (err) {
    console.log(err);
  }
};
exports.getComment = async (req, res) => {
  try {
    const { postid } = req.params;
    const comment = await Comment.find({ post: postid },{},{sort: {updatedAt: -1}}).populate({path:'owner'}).exec()
    res.json(comment);
  } catch (err) {
    console.log(err);
  }
};
