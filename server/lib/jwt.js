const jsonwebtoken = require("jsonwebtoken");
const util = require("util");

exports.jwt = {
  sign: util.promisify(jsonwebtoken.sign),
  verify: util.promisify(jsonwebtoken.verify),
};
