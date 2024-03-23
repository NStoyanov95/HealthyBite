const Recipe = require("../models/Recipe");

exports.getAll = () => Recipe.find();

exports.getOne = (recipeId) => Recipe.findById(recipeId);

exports.create = (recipeData) => Recipe.create(recipeData);

exports.getLastThree = () => Recipe.find().sort({ createdAt: -1 }).limit(3);

exports.deleteRecipe = (recipeId) => Recipe.findByIdAndDelete(recipeId);

exports.updateRecipe = (recipeId, recipeData) =>
  Recipe.findByIdAndUpdate(recipeId, recipeData);
