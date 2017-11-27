const router = require("express").Router();
const tasksRoutes = require("./tasks");
const usersRoutes = require("./users");
const groupsRoutes = require("./groups");

// tasks routes
router.use("/tasks", tasksRoutes);
// users routes
router.use("/users", usersRoutes);
//groups routes
router.use("/groups", groupsRoutes);

module.exports = router;
