const Blog = require("../models/Blog");

exports.create = (blogData) => Blog.create(blogData);

exports.getAll = () => Blog.find();

exports.getOne = (themeId) => Blog.findById(themeId);
