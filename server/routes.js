const router = require("express").Router();

const recipeController = require("./controllers/recipeController");
const userController = require("./controllers/userController");

router.use("/recipe", recipeController);
router.use("/user", userController);

module.exports = router;
