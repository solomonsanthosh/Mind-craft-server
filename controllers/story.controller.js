const Story = require("../models/successStories.model");
const mongoose = require("mongoose");

exports.getstory = async (req, res) => {
  try {
    const { topic } = req.params;
    const story = await Story.find({topic:topic},{},{sort: {updatedAt: -1}}).populate({path:'owner',select:'name'}).limit(5)
    console.log(story);
    res.json(story)
    
  } catch (err) {
    console.log("====================================");
    console.log(err);
    console.log("====================================");
  }
};

exports.postStory = async (req, res) => {
  try {
    console.log(req.body);
    const { topic,owner,story } = req.body;
    const storyNew = new  Story({topic:topic,owner:owner,story:story}).save()
    res.json(storyNew)
    
  } catch (err) {
    console.log("====================================");
    console.log(err);
    console.log("====================================");
  }
};