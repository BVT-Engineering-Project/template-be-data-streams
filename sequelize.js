const Sequelize = require('sequelize');
require('pg').defaults.parseInt8 = true;

const subEventModel = require('./api/models/sequelize/sub_event');
const streamsModel = require('./api/models/sequelize/streams');

// CONNECTION DB POSTGRESS
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PWD,
    {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      port: process.env.DB_PORT,
      logging: false,
      pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    }
);
// MODEL SEQUELIZE
const subEvent = subEventModel(sequelize, Sequelize);
const streamsSeq = streamsModel(sequelize, Sequelize);

module.exports = {
  sequelize,
  subEvent,
  streamsSeq
};
