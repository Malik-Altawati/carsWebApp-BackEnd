const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  "postgres://ntdxjqpy:4UXKLhD17SyPyfPk4Tzq_eflPMO5aJAT@drona.db.elephantsql.com:5432/ntdxjqpy"
);

// module.exports = new Sequelize("th3app", "postgres", "123456", {
//   host: "localhost",
//   dialect: "postgres",
// });
