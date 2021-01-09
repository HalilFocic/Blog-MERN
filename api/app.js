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
app.get("/post/:id", async function (req, res) {
  const post = await Post.findById(req.params.id).populate("reviews");
  res.send(JSON.stringify(post));
});
app.get("/test/:id", async function (req, res) {});
app.post("/comment/:id", function (req, res) {
  Post.findById(req.params.id, function (err, foundPost) {
    if (err) {
      res.send(JSON.stringify({ error: err }));
    } else {
      Comment.create(req.body, function (err, newComment) {
        if (err) {
          res.send(JSON.stringify({ status: 400 }));
        } else {
          foundPost.reviews.push(newComment);
          foundPost.save();
          res.send(JSON.stringify({ status: 200 }));
        }
      });
    }
  });
});

app.get("/hero/:heroName", function (req, res) {
  let link =
    "https://superheroapi.com/api/3509433779090013/search/" +
    req.params.heroName;
  axios
    .get(link)
    .then(function (response) {
      var hero = response.data.results[0];
      if (
        req.params.heroName.toLowerCase() === "superman" ||
        req.params.heroName.toLowerCase() === "batman"
      )
        hero = response.data.results[1];
      res.json(hero);
    })
    .catch(function (error) {
      res.send(
        JSON.stringify({ error: "Looks like that hero was not found!" })
      );
    })
    .then(function () {
      // always executed
    });
});
app.post("/new", function (req, res) {
  Post.create(req.body, function (err, newPost) {
    if (err) {
      res.send(JSON.stringify({ status: 400 }));
    } else {
      res.send(JSON.stringify({ status: 200 }));
    }
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
