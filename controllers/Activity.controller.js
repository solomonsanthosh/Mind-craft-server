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
