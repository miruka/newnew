const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const dotenv = require("dotenv");

//
dotenv.config();
//Express App
const app = express();

//Connect to MongoDB
const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cygmd.mongodb.net/node-blog-course?retryWrites=true&w=majority`;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MONGO DB");
    //Listen requests
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
//Set Our View Engine
app.set("view engine", "ejs");

//Middleware and Static Files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //For Accepting Form Data
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  // res.send("<p>ABOUT Page Express JS</p>");
  // res.sendFile('./views/about.html', {
  //     root: __dirname
  // })
  res.render("about", {
    title: "NODE JS BLOG",
  });
});

//Blog Routes
app.use("/blogs", blogRoutes);

//404 Page ..Position is Important

app.use((req, res) => {
  //     res.status(404).sendFile('./views/404.html', {
  //         root: __dirname
  //     })
  res.status(404).render("404", {
    title: "404 - PAGE NOT FOUND ",
  });
});
