// =========================================================
// NIGHT SKY HIGH APP
// Main Express Server File
// =========================================================


// =========================================================
// IMPORT REQUIRED PACKAGES
// =========================================================

// Express handles the web server and routing.
const express = require("express");

// Express Handlebars allows us to use .hbs template pages.
const { engine } = require("express-handlebars");


// =========================================================
// CREATE EXPRESS APPLICATION
// =========================================================

const app = express();


// =========================================================
// CONFIGURE HANDLEBARS TEMPLATE ENGINE
// =========================================================

// This sets up Handlebars so Express can use .hbs files.

// The "eq" helper is used for active navbar highlighting.
// It compares two values and returns true if they match.

app.engine(
  ".hbs",
  engine({
    extname: ".hbs",

    helpers: {
      eq: function (a, b) {
        return a === b;
      },
    },
  })
);

app.set("view engine", ".hbs");


// =========================================================
// STATIC FILES
// Allows access to:
// public/css
// public/images
// public/audio
// public/javascript
// =========================================================

app.use(express.static("public"));


// =========================================================
// STORE CURRENT PAGE URL
// Used later for active navbar highlighting.
// =========================================================

app.use(function (req, res, next) {
  res.locals.currentPath = req.path;
  next();
});


// =========================================================
// PAGE ROUTES
// Each route connects a URL to a matching .hbs page
// inside the views folder.
// =========================================================

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


// =========================================================
// START LOCAL SERVER
// Browser Address:
// http://localhost:3000
// =========================================================

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});