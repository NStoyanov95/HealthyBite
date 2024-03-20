const User = require("../models/User");
const { jwt } = require("../lib/jwt");
const bcrypt = require("bcrypt");

const SECRET = "SECRET_KEY";

exports.register = async (userData) => {
  if (userData.password !== userData.rePass) {
    throw new Error("Password mismatch!");
  }
  const user = await User.create(userData);

  return generateAccessToken(user);
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

async function generateAccessToken(user) {
  const accessToken = await jwt.sign(
    {
      _id: user._id,
      email: user.email,
      username: user.username,
    },
    SECRET
  );
  return {
    _id: user._id,
    email: user.email,
    username: user.username,
    accessToken,
  };
}
