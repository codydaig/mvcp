'use strict';

/**
 * Module Dependencies
 */
var express = require('express');
var path = require('path');

var app = express();

// Set-up the Static Public Folder
app.use('/public', express.static(path.resolve('./public')));

app.route('/*').get(function(req, res){
  res.sendFile(path.resolve('./core/client/index.html'));
});

module.exports = app;