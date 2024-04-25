const router = require("express").Router();

const recipeController = require("./controllers/recipeController");
const userController = require("./controllers/userController");
const blogController = require("./controllers/blogController");

router.use("/recipes", recipeController);
router.use("/users", userController);
router.use("/blog", blogController);

module.exports = router;
