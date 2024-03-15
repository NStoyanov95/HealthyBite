const router = require("express").Router();

const recipeService = require("../services/recipeService");

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
    console.log(req.body.owner);
    const recipe = await recipeService.create(recipeData);
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

module.exports = router;
