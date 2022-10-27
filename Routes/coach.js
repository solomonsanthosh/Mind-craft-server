
const express = require("express");
const { getCoach, sendMail } = require("../controllers/Coach.controller");

const Routes = express.Router();


Routes.get('/getcoach',getCoach)
Routes.post('/sendmail',sendMail)
module.exports = Routes