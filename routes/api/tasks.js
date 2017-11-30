const router = require("express").Router();
const tasksController = require("../../controllers/tasksController");

// Matches with "/api/tasks"
router.route("/")
  .get(tasksController.findAll)
  .post(tasksController.create)

// Matches with "/api/tasks/claim"
router.route("/claim")
  .get(tasksController.findByClaim)

// Matches with "/api/tasks/complete"
router.route("/complete")
  .get(tasksController.findByComplete)

// Matches with "/api/tasks/:id"
router.route("/claim/:id")
  .get(tasksController.findById)
  .put(tasksController.updateClaim)

router.route("/complete/:id")
  .get(tasksController.findById)
  .put(tasksController.updateComplete)

module.exports = router;
