module.exports = function(sequelize, Sequelize) {
  var Preference = sequelize.define("preference", {
    user_Name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    event_Name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tagged: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
  return Preference;
};
