
const express = require("express");
const { getActivity } = require("../controllers/Activity.controller");

const Routes = express.Router();


Routes.get('/getactivity/:topic',getActivity)
module.exports = Routes