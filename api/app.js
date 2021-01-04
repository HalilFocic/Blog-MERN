const express = require("express");
const app = express();
const parseJson = require("parse-json");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const axios = require("axios");
const Comment = require("./models/comment");
const Post = require("./models/post");
const sendMail = require("./mail");
const SendmailTransport = require("nodemailer/lib/sendmail-transport");
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost/SuperHeroes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// App setup
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.post("/email", function (req, res) {
  console.log(req.body);
  const { email, subject, text } = req.body;
  sendMail(email, subject, text, function (err, msg) {
    if (err) {
      console.log("err");
    } else {
      console.log(msg);
    }
  });
  res.json({ message: "Message recieved!" });
});
app.get("/hero/:heroName", function (req, res) {
  let link =
    "https://superheroapi.com/api/3509433779090013/search/" +
    req.params.heroName;
  axios
    .get(link)
    .then(function (response) {
      console.log(response.data.results[0]);
      var hero = response.data.results[0];
      res.json(hero);
    })
    .catch(function (error) {
      console.log(error);
      res.send("Error!");
    })
    .then(function () {
      // always executed
    });
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
