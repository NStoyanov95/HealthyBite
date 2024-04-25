const router = require("express").Router();

const blogService = require("../services/blogService");

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
