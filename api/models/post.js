const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    title:String,
    hero:String,
    content:String,
    author:String,
});
module.exports = mongoose.model("Post",postSchema);
