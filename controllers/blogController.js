const mongoose = require("mongoose");
const Blog = require("../models/blog");

exports.blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", {
        title: "All Blogs",
        blogs: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.blog_redirect = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
  //console.log(blog);
};

exports.newblog_page = (req, res) => {
  res.render("create", {
    title: "CREATE NEW NODE JS BLOG",
  });
};

exports.find_specific_blog = (req, res) => {
  //const id = req.params.blogId; //too verbose
  //console.log(req.params.blogId);
  Blog.findById(req.params.blogId)
    //   //.exec()
    .then((result) => {
      console.log(result);
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.delete_blog = (req, res) => {
  Blog.findByIdAndDelete(req.params.blogId)
    .then((result) => {
      res.status(201).json({
        redirect: "/blogs",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
