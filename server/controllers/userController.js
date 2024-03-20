const router = require("express").Router();

const userService = require("../services/userService");

router.post("/register", async (req, res) => {
  const userData = req.body;
  try {
    const { email, username, _id, accessToken } = await userService.register(
      userData
    );
    res.cookie("auth-cookie", accessToken, { httpOnly: true, secure: true });
    res.status(200).send({ email, _id, username });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
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
    res.status(401).send({ error: "Unauthorized" });
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

module.exports = router;
