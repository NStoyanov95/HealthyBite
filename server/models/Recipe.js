const mongoose = require("mongoose");
const User = require("./User");

const recipeSchema = new mongoose.Schema(
  {
    recipeName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
    },
    instructions: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
