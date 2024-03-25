const router = require("express").Router();

const userService = require("../services/userService");

router.get("/profile", async (req, res) => {
  const cookie = req.cookies["auth-cookie"];

  if (cookie) {
    try {
      const user = await userService.verifyCookie(cookie);
      console.log(user);
      res.status(200).send(user);
    } catch (error) {
      res.clearCookie("auth-cookie");
      res.status(401).send({ error: error.message });
    }
  } else {
    res.status(200).send(null);
  }
});

router.post("/register", async (req, res) => {
  const userData = req.body;
  try {
    const { email, username, _id, accessToken } = await userService.register(
      userData
    );
    res.cookie("auth-cookie", accessToken, { httpOnly: true, secure: true });
    res.status(200).send({ email, _id, username });
  } catch (error) {
    res.status(403).send({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const userData = req.body;

  try {
    const { email, username, _id, accessToken } = await userService.login(
      userData
    );
    res.cookie("auth-cookie", accessToken, { httpOnly: true, secure: true });
    res.status(200).send({ email, _id, username });
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
});

router.post("/logout", (req, res) => {
  try {
    res.clearCookie("auth-cookie");
    res.status(200).send({ message: "Logout successfully" });
  } catch (error) {
    res.status(500).send({ error: "Logout Failed" });
  }
});

router.post("/attach/:userId", async (req, res) => {
  const { userId, recipeId } = req.body;
  try {
    const user = await userService.attachFavorite(userId, recipeId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({ error: "Attach Failed" });
  }
});

router.post("/removeRecipe/:userId", async (req, res) => {
  const { userId, recipeId } = req.body;
  try {
    const user = await userService.removeFavoriteRecipe(userId, recipeId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({ error: "Remove Failed" });
  }
});

router.get("/:userId/favorites", async (req, res) => {
  try {
    const user = await userService.getSingleUser(req.params.userId);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }
    const favorites = user.favorite;
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/:userId/profile", async (req, res) => {
  try {
    const user = await userService
      .getSingleUser(req.params.userId)
      .populate("favorite")
      .populate("created")
      .select("-password");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
