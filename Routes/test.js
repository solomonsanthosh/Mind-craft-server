
const express = require("express");
const { getTest, testResults } = require("../controllers/test.controller");
const { updateUser, getUser } = require("../controllers/user.controller");
const Routes = express.Router();



Routes.post('/topic',updateUser)
Routes.get('/topic',getUser)
Routes.get('/test/:topic',getTest)
Routes.post('/updateseverity',testResults)
module.exports = Routes