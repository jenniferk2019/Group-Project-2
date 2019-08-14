module.exports = function(sequelize, Sequelize) {
  var Event = sequelize.define("event", {
    event_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    event_description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    event_category: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return Event;
};
