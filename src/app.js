const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const registerRoutes = require('./routes');

const app = express();

// Register middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Register all routes
registerRoutes(app);

module.exports = app;
