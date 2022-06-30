var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.get("/hello/:name", function (req, res) {
  res.send("Hello " + req.params.name);
});
app.get("/is-prime/:number", function (req, res) {
  let isPrime = true;
  let number = parseInt(req.params.number);
  if (!isNaN(Number)) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
  } else {
    isPrime = false;
  }
  res.send(isPrime);
});
app.listen(3000);
