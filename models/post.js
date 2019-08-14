module.exports = function(sequelize, Sequelize) {
  var Hangout = sequelize.define("hangout", {
    category: Sequelize.STRING,
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    date: Sequelize.DATE,
    details: Sequelize.STRING
  });
  return Hangout;
};
