var db = require("../models");

var express = require("express");

var router = express.Router();

module.exports = function(app) {
  // Get all examples
  app.get("/post", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.json(dbExamples);
    // });
    res.render("post");
  });

  router.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/join", function(req, res) {
    res.render("join");
  });

  // Create a new example
  app.post("/api/user", function(req, res) {
    db.user
      .create({
        user_name: req.body.user_name,
        user_password: req.body.user_password
      })
      .then(function(data) {
        res.json(data);
      });
  });

  app.post("/api/login", function(req, res) {
    db.user
      .findOne({
        where: {
          user_name: req.body.user_name,
          user_password: req.body.user_password
        }
        })
      .then(function(data) {
        if(data == null) {
          console.log("No user found with that usern\ame and password combination.");
        } else {
          console.log("Login was successful!");
        }

        res.end();
      });
  });
};
