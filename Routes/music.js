
const express = require("express");
const { getMusic } = require("../controllers/music.controller");

const Routes = express.Router();


Routes.get('/getmusic/:topic',getMusic)
module.exports = Routes