const { Sequelize } = require('sequelize');

// https://stackoverflow.com/a/27688357/1217998
const dialectOptions = process.env.NODE_ENV !== 'production' ? {} : {
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
};

const sequelize = new Sequelize('postgres://root:password@0.0.0.0:5432/postgres', { dialectOptions });

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.close();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();
