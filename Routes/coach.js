
const express = require("express");
const { getCoach, sendMail, createCoach } = require("../controllers/coach.controller");

const Routes = express.Router();


Routes.get('/getcoach',getCoach)
Routes.post('/sendmail',sendMail)
Routes.post('/createcoach',createCoach)
module.exports = Routes