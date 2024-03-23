const SECRET = "SECRET_KEY";
const { jwt } = require("../lib/jwt");

const recipeService = require("../services/recipeService");

exports.isAuth = async (req, res, next) => {
  const token = req.cookies["auth-cookie"];

  const recipeId = req.params.recipeId;
  const user = await jwt.verify(token, SECRET);
  const userId = user._id;
  const recipe = await recipeService.getOne(recipeId);
  const recipeOwner = recipe.owner.toString();

  if (userId !== recipeOwner) {
    return res.status(403).json({ error: "You are not authorized" });
  }

  next();
};
