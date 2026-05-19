const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/planets", function (req, res) {
  res.render("planets");
});

app.get("/moons", function (req, res) {
  res.render("moons");
});

app.get("/gallery", function (req, res) {
  res.render("gallery");
});

app.get("/community", function (req, res) {
  res.render("community");
});

app.get("/upload", function (req, res) {
  res.render("upload");
});

app.get("/jokes", function (req, res) {
  res.render("jokes");
});

app.get("/arcade", function (req, res) {
  res.render("arcade");
});

app.get("/observatory", function (req, res) {
  res.render("observatory");
});

app.get("/newsletter", function (req, res) {
  res.render("newsletter");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/login", function (req, res) {
  res.render("login");
});

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});