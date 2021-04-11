const health = require('./health');
const users = require('./users');

const registerRoutes = (app) => {
  health(app);
  users(app);
};

module.exports = registerRoutes;
