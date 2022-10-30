
const express = require("express");
const { getActivity, getActivities, addActivity } = require("../controllers/Activity.controller");

const Routes = express.Router();


Routes.get('/getactivity/:topic',getActivity)
Routes.get('/getactivities',getActivities)
Routes.post('/addactivity',addActivity)
module.exports = Routes