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
exports.postMusic = async (req,res) => {

  try { 
    const {song,topic,link} = req.body
    const music = new Music({song:song,topic:topic,link:link}).save()
    res.json(music)
  } catch (err) {
    console.log(err);
  } 
}
exports.getMusics = async (req, res) => {
  try {
  
    const music = await Music.find()
    res.json(music)
  } catch (err) {
    console.log(err);
  }
};
