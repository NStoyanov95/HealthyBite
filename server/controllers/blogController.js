const router = require("express").Router();

const blogService = require("../services/blogService");

router.get("/themes", async (req, res) => {
  try {
    const themes = await blogService.getAll();
    return res.json(themes);
  } catch (error) {
    console.log("Error fetch themes:", error);
    res.status(500).json({ error });
  }
});

router.get("/theme-details/:themeId", async (req, res) => {
  const themeId = req.params.themeId;
  try {
    const theme = await blogService.getOne(themeId);
    return res.json(theme);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post("/create", async (req, res) => {
  try {
    const themeData = req.body.themeData;
    const theme = await blogService.create(themeData);
    res.json(theme);
  } catch (error) {
    console.log("Error creating theme:", error);
    res.status(500).json({ error });
  }
});

module.exports = router;
