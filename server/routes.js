var path = require('path');
var Router = require('express').Router;
var quizHandler = require('./quiz');

module.exports = new Router()
  .get('/', quizHandler.getRoute);
  
