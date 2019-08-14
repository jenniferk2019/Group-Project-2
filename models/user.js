module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("user", {
    user_name: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    user_password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return User;
};
