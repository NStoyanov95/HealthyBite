const Recipe = require("../models/Recipe");

exports.getAll = () => Recipe.find();

exports.getOne = (recipeId) => Recipe.findById(recipeId);

exports.create = (recipeData) => Recipe.create(recipeData);

exports.getLastThree = () => Recipe.find().sort({ createdAt: -1 }).limit(3);
