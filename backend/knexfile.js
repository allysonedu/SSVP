require('dotenv').config();

const knexConfig = require('./src/config/database');

module.exports = {
  local: knexConfig.local,
};
