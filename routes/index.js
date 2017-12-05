const express = require('express');
const passport = require('passport');
const router = express.Router();
const path = require("path");
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);



module.exports = router;
