// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  all: function(callBack) {
    orm.all("phillymeets", function(res) {
      callBack(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, callBack) {
    orm.create("phillymeets", cols, vals, function(res) {
      callBack(res);
    });
  },
  update: function(objColVals, condition, callBack) {
    orm.update("phillymeets", objColVals, condition, function(res) {
      callBack(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = phillyMeet;
