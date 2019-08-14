var db = require("../models");

var express = require("express");

var router = express.Router();

module.exports = function(app) {
//   // Get all examples
//   app.get("/post", function(req, res) {
//     // db.Example.findAll({}).then(function(dbExamples) {
//     //   res.json(dbExamples);
//     // });
//     res.render("post");
//   });

//   router.get("/", function(req, res) {
//     res.render("index");
//   });

//   app.get("/join", function(req, res) {
//     res.render("join");
//   });

  // Create a new example
  app.post("/api/addhangout", function(req, res) {
    db.hangout.create(req.body).then(function(hangoutData) {
      res.json(hangoutData);
    });
  });

  app.get("/api/addhangout", function(req, res) {
    
  });

//   // // Delete an example by id
//   // app.delete("/api/examples/:id", function(req, res) {
//   //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//   //     res.json(dbExample);
//   //   });
//   // });
};
