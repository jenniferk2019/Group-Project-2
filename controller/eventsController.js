var express = require("express");
var router = express.Router();
var events = require("../models/events.js");

// This section creates the routes and the functions that utilize them. Note the page on the browser that is being referenced. 

router.get("/", function(req, res) {
  events.all(function(data) {
    var hbsObject = {
      events: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
// This posts to the "Events" page what is created below. 
// router.post("/api/events", function(req, res) {
//   events.create(["#", "#"], [req.body.#, req.body.#], function(result) {
//     res.json({ id: result.insertId });
//   });
// });


router.put("/api/events/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  events.update(
    {
   
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// This exports the router to be used in the server.js file. 
module.exports = router;
