
const { default: mongoose } = require('mongoose');
const Post = require("../models/post.model");

const Comment = require("../models/comment.model");

const User = require('../models/user.model')
exports.createUser = async (req,res) => {
    try {
        var id = mongoose.Types.ObjectId()
        const {email,name} = req.body.user;
        const user =  new User({_id:id,email:email,name:name}).save()
        res.json(id)

    } catch(err){
        console.log(err);
    }
}
exports.updateUser = async (req,res)=>{
    const {email,topic} = req.body.user;
    console.log(req.body);
    

    try {
        const user = await User.findOneAndUpdate({email:email},{topic:topic},{new:true})
        console.log(user);
        res.json(user)
       
    } catch (err){
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    }

}
exports.getSingleUser = async (req,res) => {
    try {
        const {email} = req.params
        console.log('====================================');
        console.log(email,'email');
        console.log('====================================');
        const user = await User.findOne({email:email})
        console.log('====================================');
        console.log(user);
        console.log('====================================');
        res.json(user)
    } catch(err){
        console.log(err);
    }
}
exports.getUser = async (req,res)=>{
    try{
        const users = await User.find()
       
        res.json(users)
    } catch (err){
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    }
}

exports.getProfile = async (req,res) => {
    try{
        const {id} = req.params
        const post = await Post.find({owner:id})
        const comment = await Comment.find({owner:id})
       console.log('====================================');
       console.log(post,comment);
       console.log('====================================');
        res.json({
            post:post,
            comment:comment
        })
    } catch (err){
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    }
}