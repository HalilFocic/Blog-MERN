const express = require("express");
const app = express();
const parseJson = require('parse-json');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const axios = require("axios");
const Comment = require("./models/comment");
const Post = require("./models/post");
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost/SuperHeroes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// App setup
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.post("/email", function (req, res) {
  console.log(req.body);
  res.json({ message: "Message recieved!" });
});
app.get("/", function (req, res) {
  res.send("HI");
});
app.get("/posts", function (req, res) {
  Post.find({}, function (err, posts) {
    if (err) {
      throw err;
    }
    res.send(JSON.stringify(posts));
  });
});
app.listen(3001, function () {
  console.log("app listening on port 3001");
});
