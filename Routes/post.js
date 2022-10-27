
const express = require("express");
const { createPost,getPost, createComment, getComment } = require("../controllers/post.contoller");
const { getstory, postStory } = require("../controllers/story.controller");


const Routes = express.Router();


Routes.post('/createpost',createPost)
Routes.get('/getpost/:topic',getPost)

Routes.post('/createcomment',createComment)
Routes.get('/getcomment/:postid',getComment)
Routes.get('/getstory/:topic',getstory)
Routes.post('/createstory',postStory)

module.exports = Routes