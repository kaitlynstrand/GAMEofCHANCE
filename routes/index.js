const express = require('express');
const passport = require('passport');
const router = express.Router();
const path = require("path");
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);
router.get("/amicrazy", (req, res) => res.json(true))

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// const env = {
//   AUTH0_CLIENT_ID: '9rIT0eKomzmv7q47VSRbySpfONYGL5e9',
//   AUTH0_DOMAIN: 'gameofchance.auth0.com',
//   AUTH0_CALLBACK_URL: 'http://localhost:3000/callback'
// };

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });

// // Perform the login
// router.get(
//   '/signin',
//   passport.authenticate('auth0', {
//     clientID: env.AUTH0_CLIENT_ID,
//     domain: env.AUTH0_DOMAIN,
//     redirectUri: env.AUTH0_CALLBACK_URL,
//     audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
//     responseType: 'code',
//     scope: 'openid'
//   }),
//   function(req, res) {
//     res.redirect('/');
//   }
// );

// // Perform session logout and redirect to homepage
// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });

// // Perform the final stage of authentication and redirect to '/user'
// router.get(
//   '/callback',
//   passport.authenticate('auth0', {
//     failureRedirect: '/'
//   }),
//   function(req, res) {
//     res.redirect(req.session.returnTo || '/user');
//   }
// );

module.exports = router;
