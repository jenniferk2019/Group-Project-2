var express = require("express");
var db = require("../models");

var router = express.Router();

module.exports = function (app) {
  // Get all examples
  app.get("/post", function (req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.json(dbExamples);
    // });
    res.render("post");
  });

  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/join", function(req, res) {
    db.hangout.findAll({}).then(function(hangoutData) {
      console.log(hangoutData);
      var objects = {
        hangouts: hangoutData
      }
      res.render("join", objects);
    });
  });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
  app.get("*", function(req, res) {
    res.render("404");
  });
};
// Render 404 page for any unmatched routes
