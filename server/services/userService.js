const User = require("../models/User");
const { jwt } = require("../lib/jwt");
const bcrypt = require("bcrypt");

const SECRET = "SECRET_KEY";

exports.getSingleUser = (userId) => User.findById(userId);

exports.attachFavorite = (userId, recipeId) =>
  User.findByIdAndUpdate(userId, { $push: { favorite: recipeId } });

exports.removeFavoriteRecipe = (userId, recipeId) =>
  User.findByIdAndUpdate(userId, { $pull: { favorite: recipeId } });

exports.attachCreated = (userId, recipeId) =>
  User.findByIdAndUpdate(userId, { $push: { created: recipeId } });

exports.register = async (userData) => {
  const user = await User.findOne({ email: userData.email });
  if (user) {
    throw new Error("User already exists");
  }

  if (userData.password !== userData.rePass) {
    throw new Error("Password mismatch!");
  }

  const newUser = await User.create(userData);

  return generateAccessToken(newUser);
};

exports.login = async (userData) => {
  const user = await User.findOne({ email: userData.email });

  if (!user) {
    throw new Error("Invalid username or password!");
  }

  const isValid = await bcrypt.compare(userData.password, user.password);

  if (!isValid) {
    throw new Error("Invalid username or password!");
  }

  return generateAccessToken(user);
};

exports.verifyCookie = async (token) => {
  if (token) {
    const user = await jwt.verify(token, SECRET);

    if (user) {
      return user;
    }
  }
};

async function generateAccessToken(user) {
  const accessToken = await jwt.sign(
    {
      _id: user._id,
      email: user.email,
      username: user.username,
    },
    SECRET,
    {expiresIn: '1m'}
  );
  return {
    _id: user._id,
    email: user.email,
    username: user.username,
    accessToken,
  };
}
