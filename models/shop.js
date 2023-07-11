const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Shop = sequelize.define("client", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  district: {
    type: DataTypes.STRING(50),
  },
  client_phone_number: {
    type: DataTypes.STRING(15),
    unique: true
  },
  client_email: {
    type: DataTypes.STRING
  }
},
// {
//     freezeTableName: true
// }
);

module.exports = Client;