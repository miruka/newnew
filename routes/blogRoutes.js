const express = require("express");
const Blog = require("../models/blog");

const router = express.Router();

const BlogController = require("../controllers/blogController");

router.get("/", BlogController.blog_index);

router.post("/", BlogController.blog_redirect);

router.get("/create", BlogController.newblog_page);

router.get("/:blogId", BlogController.find_specific_blog);

router.delete("/:blogId", BlogController.delete_blog);

module.exports = router;
