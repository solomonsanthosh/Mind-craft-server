
const express = require("express");
const { getMusic, getMusics, postMusic } = require("../controllers/music.controller");

const Routes = express.Router();


Routes.get('/getmusic/:topic',getMusic)
Routes.get('/getmusics',getMusics)
Routes.post('/addmusic',postMusic)
module.exports = Routes