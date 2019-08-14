module.exports = function(sequelize, Sequelize) {
  var Hangout = sequelize.define("hangout", {
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    date: Sequelize.DATE,
    user: Sequelize.STRING
  });
  return Hangout;
};
