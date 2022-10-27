
const express = require("express");

const { createUser, getSingleUser, getProfile } = require("../controllers/user.controller");
const Routes = express.Router();


Routes.get('/getprofile/:id',getProfile)
Routes.post('/createuser',createUser)
Routes.get('/getsingleuser/:email',getSingleUser)
module.exports = Routes