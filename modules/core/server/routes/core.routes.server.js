'use strict';

var path = require('path');

var core = require(path.resolve('./modules/core/server/controllers/core.controller.server.js'));

module.exports = function(app) {
  app.route('/*').get(core.renderIndex);
};
