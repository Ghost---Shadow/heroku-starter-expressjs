const health = require('./health');
const user = require('./user');
const post = require('./post');

const registerRoutes = (app) => {
  app.use('/health', health);
  app.use('/user', user);
  app.use('/post', post);
};

module.exports = registerRoutes;
