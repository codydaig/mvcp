'use strict';

var path = require('path');
var _ = require('lodash');
var util = require(path.resolve('./core/util.js'));

var config = {};

var defaultConfig = require(path.resolve('./config/default.js'));
var localConfig = require(path.resolve('./config/local.js'));
_.merge(config, defaultConfig);
_.merge(config, localConfig);

config.server = {};

config.server.routes = util.getGlobbedPaths(['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js']);

module.exports = config;
