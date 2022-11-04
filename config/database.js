// const { Client } = require('pg');

// const port = process.env.PORT;
// module.exports.getClient = async () => {
//   const client = new Client({
//     host: "localhost",
//     port: port,
//     user: "abhi",
//     password: "1234",
//     database: "aaa",
    
// });
// await client.connect();
// return client;
// }



const { Sequelize } = require('sequelize');

const db = new Sequelize('aaa', 'abhi', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false,  // don't add the timestamp attributes (updatedAt, createdAt)
    freezeTableName: true, //prevent sequelize from pluralizing table names
  },
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
});

module.exports = db;
