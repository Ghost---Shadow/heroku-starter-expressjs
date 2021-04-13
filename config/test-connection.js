const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://root:password@0.0.0.0:5432/postgres');

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
