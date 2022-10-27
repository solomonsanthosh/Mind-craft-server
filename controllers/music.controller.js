const Music = require("../models/music.model");

exports.getMusic = async (req, res) => {
  try {
    console.log(req);
    const {topic} = req.params
    const music = await Music.find({ topic: topic }).limit(3)
    res.json(music)
  } catch (err) {
    console.log(err);
  }
};
