const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('elbrus_thanks', 'user', 'pass', {
  dialect: 'sqlite',
  host: './elbrus_thanks.sqlite',
  // storage: '/home/tamara/elbrus_thanks.db', // or ':memory:'
//   ]dialectOptions: {
  // Your sqlite3 options here
  // for instance, this is how you can configure the database opening mode:
  // mode: SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE | SQLite.OPEN_FULLMUTEX,
//   },
});

module.exports = sequelize;
