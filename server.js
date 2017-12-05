const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const flash = require("connect-flash");
const mongoose = require("mongoose");
const moment = require("moment");
const passport = require("passport");
const Auth0Strategy = require('passport-auth0');
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

app.use(cors());

<<<<<<< HEAD
=======

>>>>>>> e39ee2d07ba82ecf17eb31aac5c22b3a6272f963
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setting up express app
app.use(flash());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/chore-us",
  {
    useMongoClient: true
  }
);

app.use(routes)

// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
