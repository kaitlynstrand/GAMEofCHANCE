const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require("path");
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);



module.exports = router;
