// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var event = {
  all: function(callBack) {
    orm.all("events", function(result) {
      callBack(result);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, callBack) {
    orm.create("events", cols, vals, function(result) {
      callBack(result);
    });
  },
  update: function(objColVals, condition, callBack) {
    orm.update("events", objColVals, condition, function(result) {
      callBack(result);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = event;
