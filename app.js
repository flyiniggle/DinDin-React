// Imports
const fs = require("fs");

const express = require('express');
const bodyParser = require("body-parser");

const MealsService = require("./src/server/services/meals");


// Setup
const app = express();

//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({}));


// Routes for static files

// Routes for modules
app.all("/meals", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  next();
});

app.get("/meals", function(req, res) {
  MealsService.read()
    .then(function(data) {
      res.status(200).send(data);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
});

app.post("/meals", function(req, res) {
  MealsService.write(req.body)
    .catch(function(err) {
      console.log(err);
      res.status(400).send(err);
    })
    .then(function() {
      res.status(200).send()
    });
})

app.listen(3090, function() {
	console.log("I hear you at http://localhost:3090"); // eslint-disable-line no-console
});
