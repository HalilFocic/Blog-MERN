const mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});
module.exports = mongoose.model("Post", postSchema);
