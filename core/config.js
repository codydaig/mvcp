'use strict';

var path = require('path');
var _ = require('underscore');

var config = {};

var defaultConfig = require(path.resolve('./config/default.js'));
_.merge(config, defaultConfig);

module.exports = config;
