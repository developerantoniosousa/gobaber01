require('dotenv').config();

module.exports = {
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  operatorAliases: false,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
