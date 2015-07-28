'use strict';

/**
 * Module Dependencies
 */
var express = require('express');
var path = require('path');

/**
 * Application Dependencies
 */
var config = require(path.resolve('./core/config.js'));
var db = require(path.resolve('./core/db.js'));

var app = express();

// Set-up the Static Public Folder
app.use('/public', express.static(path.resolve('./public')));

config.server.routes.forEach(function(route){
  require(path.resolve(route))(app);
});

module.exports = app;