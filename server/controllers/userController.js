const router = require("express").Router();

const userService = require("../services/userService");

router.post("/register", async (req, res) => {
  const userData = req.body;
  try {
    const result = await userService.register(userData);
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const userData = req.body;

  try {
    const result = await userService.login(userData);
    res.send(result);
  } catch (error) {
    res.status(401).send({ error: "Unauthorized" });
  }
});

module.exports = router;
