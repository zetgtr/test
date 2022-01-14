module.exports = (sequelize, Sequelize) => {
  const Test = sequelize.define("tutorial", {
    date: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    number: {
      type: Sequelize.STRING,
    },
    distance: {
      type: Sequelize.STRING,
    },
  });

  return Test;
};
