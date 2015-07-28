'use strict';

/** 
 * Module Depencencies
 */
var glob = require('glob');
var _ = require('lodash');
var path = require('path');
var Promise = require('bluebird');

var db = require(path.resolve('./core/db.js'));

glob("./modules/*/server/schemas/**/*.js", function (er, files) {
  _.each(files, function(file){
    require(path.resolve(file));
  });
  var app = require(path.resolve('./core/express.js'));
  app.listen(3000, function(err){
    if(err) console.error(err);
    console.log("Listening on port 3000");
  });
});
