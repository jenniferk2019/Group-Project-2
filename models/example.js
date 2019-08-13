module.exports = function(sequelize, Sequelize) {
  var Example = sequelize.define("Example", {
    text: Sequelize.STRING,
    description: Sequelize.TEXT
  });
  return Example;
};
