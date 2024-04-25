const Blog = require("../models/Blog");

exports.create = (blogData) => Blog.create(blogData);
