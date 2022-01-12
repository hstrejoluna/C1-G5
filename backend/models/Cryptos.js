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
  price: {
    type: Sequelize.INTEGER(100),
  },
  highday: {
    type: Sequelize.INTEGER(100),
  },
  lowday: {
    type: Sequelize.INTEGER(100),
  },
  changepct24hour: {
    type: Sequelize.INTEGER(100),
  },
});
module.exports = Cryptos;
