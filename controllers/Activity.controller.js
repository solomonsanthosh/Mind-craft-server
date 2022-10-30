const Activity = require("../models/Activities.model");

exports.getActivity = async (req, res) => {
  try {
    
    const {topic} = req.params
    const activity = await Activity.find({ topic: topic }).limit(5)
    res.json(activity)
  } catch (err) {
    console.log(err);
  }
};
exports.addActivity = async (req,res) => {
  try { 
    const {title,topic,duration} = req.body
    const activity = new Activity({title:title,topic:topic,duration:duration}).save()
    res.json(activity)
  } catch (err) {
    console.log(err);
  } 
}

exports.getActivities = async (req, res) => {
  try {
    
    
    const activity = await Activity.find()
    res.json(activity)
  } catch (err) {
    console.log(err);
  }
};

