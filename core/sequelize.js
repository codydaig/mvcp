'use strict';

var path = require('path');
var Sequelize = require("sequelize");

var config = require(path.resolve('./core/config.js'));

var db = {};

db.Sequelize = require('sequelize');
db.sequelize = new Sequelize(config.db.name, config.db.user, config.db.pass, {
  host: config.db.host,
  dialect: config.db.dialect
});

var model = db.sequelize.import(path.resolve('./modules/users/schemas/User.schema.js'));
db[model.name] = model;

module.exports = db;