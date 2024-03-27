const router = require("express").Router();

const { isAuth } = require("../middlewares/authMiddleware");

const recipeService = require("../services/recipeService");
const userService = require("../services/userService");

router.get("/catalog", async (req, res) => {
  try {
    const recipes = await recipeService.getAll();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
});

router.post("/create", async (req, res) => {
  try {
    const recipeData = req.body.recipeData;
    recipeData.owner = req.body.owner;
    const recipe = await recipeService.create(recipeData);
    await userService.attachCreated(req.body.owner, recipe._id);
    res.json(recipe);
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/details/:recipeId", async (req, res) => {
  try {
    const recipe = await recipeService.getOne(req.params.recipeId);
    res.json(recipe);
  } catch (error) {
    console.error("Error retrieving recipe details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/lastThree", async (req, res) => {
  try {
    const lastRecipes = await recipeService.getLastThree();
    res.json(lastRecipes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/delete/:recipeId", isAuth, async (req, res) => {
  try {
    const recipeId = req.params.recipeId;
    const recipe = await recipeService.deleteRecipe(recipeId);
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/edit/:recipeId", isAuth, async (req, res) => {
  try {
    const { recipeId, recipeData } = req.body;
    const recipe = await recipeService.updateRecipe(recipeId, recipeData);
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/search", async(req, res) => {
  const { recipeName } = req.query;

  try {
    const recipes = await recipeService.search(recipeName)
    res.json(recipes)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
