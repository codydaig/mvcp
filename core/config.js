'use strict';

var path = require('path');
var _ = require('lodash');

var config = {};

var defaultConfig = require(path.resolve('./config/default.js'));
var localConfig = require(path.resolve('./config/local.js'));
_.merge(config, defaultConfig);
_.merge(config, localConfig);

module.exports = config;
