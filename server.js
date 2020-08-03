const http = require("http");
const fs = require("fs");
const lodash = require("lodash");

const server = http.createServer((req, res) => {
  const num = lodash.random(0, 90);
  console.log(num);
  //console.log(lodash);
  const greet = lodash.once(() => {
    console.log("Working With Lodash");
  });
  greet();
  greet();
  //set header content Type
  res.setHeader("content-type", "text/html");
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // Send HTML FILES
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.end(data);
  });
});
server.listen(3000, "localhost", () => {
  console.log("Listening on Port 3000 ");
});
