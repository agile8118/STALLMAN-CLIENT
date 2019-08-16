const express = require("express");
const path = require("path");

var app = express();

const publicPath = path.join(__dirname, "./public");

app.use(express.static(publicPath));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/profile", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/profile.html"));
});

app.get("*", function(req, res) {
  res.send("Page Not Found!");
});

app.listen(6060, function() {
  console.log("Server has started on", 6060);
});
