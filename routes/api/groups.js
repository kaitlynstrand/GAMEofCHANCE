const router = require("express").Router();
const groupsController = require("../../controllers/groupsController");

// Matches with "/api/groups"
router.route("/")
  .get(groupsController.findAll)
  .post(groupsController.create)

// Matches with "/api/groups/:name"
router.route("/:name")
  .get(groupsController.findByName)
  .put(groupsController.update)
  .delete(groupsController.remove)

module.exports = router;
