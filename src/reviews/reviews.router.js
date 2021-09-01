const router = require("express").Router();
const controller = require("./reviews.controller");

router
  .route("/:reviewId([0-9]+)")
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
