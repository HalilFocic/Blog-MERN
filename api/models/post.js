const mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  revies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});
module.exports = mongoose.model("Post", postSchema);
