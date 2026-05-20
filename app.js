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
  res.render("planets", {
    pageTitle: "Planet Tracker",
    pageSubtitle: "The Solar System Planet Overview",
    sectionLinks: `

<span class="planet-links-text">
    Planet links →
</span>

<a href="/planet/mercury" class="planet-link-item">
    <img src="/images/planets/Mercury.gif" alt="Mercury">
    <span>Mercury</span>
</a>

<a href="/planet/venus" class="planet-link-item">
    <img src="/images/planets/Venus.gif" alt="Venus">
    <span>Venus</span>
</a>

<a href="/planet/earth" class="planet-link-item">
    <img src="/images/planets/Earth.gif" alt="Earth">
    <span>Earth</span>
</a>

<a href="/planet/mars" class="planet-link-item">
    <img src="/images/planets/Mars.gif" alt="Mars">
    <span>Mars</span>
</a>

<a href="/planet/jupiter" class="planet-link-item">
    <img src="/images/planets/Jupiter.gif" alt="Jupiter">
    <span>Jupiter</span>
</a>

<a href="/planet/saturn" class="planet-link-item">
    <img src="/images/planets/Saturn.gif" alt="Saturn">
    <span>Saturn</span>
</a>

<a href="/planet/uranus" class="planet-link-item">
    <img src="/images/planets/Uranus.gif" alt="Uranus">
    <span>Uranus</span>
</a>

<a href="/planet/neptune" class="planet-link-item">
    <img src="/images/planets/Neptune.gif" alt="Neptune">
    <span>Neptune</span>
</a>

`
    
  });
});

app.get("/planet/:name", function (req, res) {

  const planets = {

    mercury: {
      name: "Mercury",
      image: "/images/planets/Mercury.gif",
      description: "Mercury is the smallest planet in the Solar System and the closest planet to the Sun.",
      type: "Terrestrial Planet",
      distanceFromSun: "57.9 million km",
      yearLength: "88 Earth days",
      dayLength: "59 Earth days",
      moons: "0",
      gravity: "3.7 m/s²",
      atmosphere: "Very thin",
      smokingStatus: "Non-Smoking 👽",
      nightSkyFact:
        "Mercury is basically the Solar System’s hardcore mode. One side cooks, the other freezes."
    },

    venus: {
      name: "Venus",
      image: "/images/planets/Venus.gif",
      description: "Venus is the hottest planet in the Solar System due to its thick atmosphere.",
      type: "Terrestrial Planet",
      distanceFromSun: "108.2 million km",
      yearLength: "225 Earth days",
      dayLength: "243 Earth days",
      moons: "0",
      gravity: "8.87 m/s²",
      atmosphere: "Carbon dioxide",
      smokingStatus: "Non-Smoking 👽☹️",
      nightSkyFact:
        "Named after the goddess of love, yet hot enough to melt lead. Massive red flag."
    },

    earth: {
      name: "Earth",
      image: "/images/planets/Earth.gif",
      description: "Earth is the only known planet to support life.",
      type: "Terrestrial Planet",
      distanceFromSun: "149.6 million km",
      yearLength: "365 days",
      dayLength: "24 hours",
      moons: "1",
      gravity: "9.8 m/s²",
      atmosphere: "Nitrogen and oxygen",
      smokingStatus: "Smoking Friendly 👽😎",
      nightSkyFact:
        "Every planet is named after a god except the planet full of people arguing about gods."
    },

    mars: {
      name: "Mars",
      image: "/images/planets/Mars.gif",
      description: "Mars is known as the Red Planet because of iron oxide on its surface.",
      type: "Terrestrial Planet",
      distanceFromSun: "227.9 million km",
      yearLength: "687 Earth days",
      dayLength: "24.6 hours",
      moons: "2",
      gravity: "3.7 m/s²",
      atmosphere: "Thin carbon dioxide",
      smokingStatus: "Non-Smoking 👽☹️",
      nightSkyFact:
        "Humanity’s favourite backup plan despite having no air, no shops, and no toilets."
    },
        jupiter: {
      name: "Jupiter",
      image: "/images/planets/Jupiter.gif",
      description: "Jupiter is the largest planet in the Solar System.",
      type: "Gas Giant",
      distanceFromSun: "778.5 million km",
      yearLength: "11.86 Earth years",
      dayLength: "9.9 hours",
      moons: "95",
      gravity: "24.79 m/s²",
      atmosphere: "Hydrogen and helium",
      smokingStatus: "Non-Smoking 👽",
      nightSkyFact:
        "Jupiter is so large it nearly became a star. The Solar System’s biggest almost."
    },

    saturn: {
      name: "Saturn",
      image: "/images/planets/Saturn.gif",
      description: "Saturn is famous for its spectacular ring system.",
      type: "Gas Giant",
      distanceFromSun: "1.4 billion km",
      yearLength: "29.4 Earth years",
      dayLength: "10.7 hours",
      moons: "146",
      gravity: "10.44 m/s²",
      atmosphere: "Hydrogen and helium",
      smokingStatus: "Non-Smoking 👽☹️",
      nightSkyFact:
        "Saturn looks like the only planet that made an effort before going out."
    },

    uranus: {
      name: "Uranus",
      image: "/images/planets/Uranus.gif",
      description: "Uranus rotates on its side unlike most planets.",
      type: "Ice Giant",
      distanceFromSun: "2.9 billion km",
      yearLength: "84 Earth years",
      dayLength: "17.2 hours",
      moons: "27",
      gravity: "8.69 m/s²",
      atmosphere: "Hydrogen, helium and methane",
      smokingStatus: "Non-Smoking 👽☹️",
      nightSkyFact:
        "Every astronomy teacher in history has regretted letting students pronounce Uranus out loud."
    },

    neptune: {
      name: "Neptune",
      image: "/images/planets/Neptune.gif",
      description: "Neptune is the most distant planet in the Solar System.",
      type: "Ice Giant",
      distanceFromSun: "4.5 billion km",
      yearLength: "165 Earth years",
      dayLength: "16.1 hours",
      moons: "14",
      gravity: "11.15 m/s²",
      atmosphere: "Hydrogen, helium and methane",
      smokingStatus: "Non-Smoking 👽☹️",
      nightSkyFact:
        "Neptune was discovered partly because Uranus was behaving strangely. Cosmic detective work."
    }

  };

  const planetName = req.params.name.toLowerCase();

  const selectedPlanet = planets[planetName];

  if (!selectedPlanet) {
    return res.send("Planet not found.");
  }

  res.render("planet", {
    pageTitle: selectedPlanet.name,
    pageSubtitle: "Planet Overview",
    planet: selectedPlanet
  });

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

app.get("/history", function (req, res) {
  res.render("history");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/timeToChill", function (req, res) {
  res.render("timeToChill");
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