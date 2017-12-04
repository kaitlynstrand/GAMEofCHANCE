const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const express = require("express");
const flash = require("connect-flash");
const mongoose = require("mongoose");
const passport = require("passport");
const Auth0Strategy = require('passport-auth0');
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

const strategy = new Auth0Strategy(
{
	domain: 'https://gameofchance.auth0.com',
	clientID: '9rIT0eKomzmv7q47VSRbySpfONYGL5e9',
	clientSecret: 'RLKhBawaE-UlmYzgn_j56WXAEZ0pdwrA2HcDPR0F6dkcWlW-o3qQCJMHJ2vtJ--q',
	callbackURL: 'http://localhost:3000/callback'
}
(accessToken, refreshToken, extraParams, profile, done) => {
	return done(null, profile);
}
);

passport.use(strategy);
passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(user, done) {
	done(null, user);
});

app.use(passport(initialize));
app.use(cors());
app.use('/silent', staticFile('$__dirname}/silent.html'));


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setting up express app
app.use(require('morgan')('dev'));
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


// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
