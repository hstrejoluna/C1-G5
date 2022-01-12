const Sequelize = require("sequelize");
const db = require("../config/db");

const Cryptos = db.define("cryptos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(60),
  },
  currency: {
    type: Sequelize.STRING(60),
  },
  price: {
    type: Sequelize.INTEGER,
  },
  highday: {
    type: Sequelize.INTEGER,
  },
  lowday: {
    type: Sequelize.INTEGER,
  },
  changepct24hour: {
    type: Sequelize.INTEGER,
  },
});
module.exports = Cryptos;
