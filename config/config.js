module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'postgres',
    host: '0.0.0.0',
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    // https://stackoverflow.com/a/27688357/1217998
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Heroku uses self signed certs
      },
    },
  },
};
