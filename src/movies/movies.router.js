const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed"); // error handler for methods
const routeNotAllowed = require("../errors/routeNotAllowed"); // error handler for unaccepted routes
const theatersRouter = require("../theaters/theaters.router");
const reviewsRouter = require("../reviews/reviews.router");

router.use("/:movieId([0-9]+)/reviews", reviewsRouter).all(methodNotAllowed);
router.use("/:movieId([0-9]+)/theaters", theatersRouter).all(methodNotAllowed);
router.route("/:movieId([0-9]+)/critics").all(routeNotAllowed); // not allow critics nested route
router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:movieId([0-9]+)").get(controller.read).all(methodNotAllowed);

module.exports = router;
