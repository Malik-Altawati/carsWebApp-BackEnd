const Sequelize = require("sequelize");
const db = require("../config/database");

const User = require("./User");


db.sync()
  .then(() => console.log("cars table is up"))
  .catch((err) => console.log(`Error### ${err}`));

const Car = db.define("car", {
  UID: {
    type: Sequelize.STRING,
  },
  Description: {
    type: Sequelize.STRING,
  },
  Year: {
    type: Sequelize.STRING,
  },
  Vendor: {
    type: Sequelize.STRING,
  },
  InlandStatus: {
    type: Sequelize.STRING,
  },
  CargoReceived: {
    type: Sequelize.STRING,
  },
  TitleReceived: {
    type: Sequelize.STRING,
  },
  DaysinStorage: {
    type: Sequelize.STRING,
  },
  Origin: {
    type: Sequelize.STRING,
  },
  Destination: {
    type: Sequelize.STRING,
  },
  LoadRequest: {
    type: Sequelize.STRING,
  },
  Consignee: {
    type: Sequelize.STRING,
  }, user_id: {
    type: Sequelize.INTEGER,
  }

});

// Car.belongsTo(User, { foreignKey: "user_id" });

module.exports = Car;
