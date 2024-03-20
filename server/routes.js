const router = require("express").Router();

const recipeController = require("./controllers/recipeController");
const userController = require("./controllers/userController");

router.use("/recipes", recipeController);
router.use("/users", userController);

module.exports = router;
