'use strict';

var path = require('path');

exports.renderIndex = function(req, res) {
  res.sendFile(path.resolve('./modules/core/client/views/index.html'));
};