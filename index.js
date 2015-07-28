'use strict';

/** 
 * Module Depencencies
 */
var path = require('path');
var Promise = require('bluebird');

var db = require(path.resolve('./core/sequelize.js'));

db.sequelize.sync().then(function(){
  var app = require(path.resolve('./core/express.js'));
  app.listen(3000, function(err){
    if(err) console.error(err);
    console.log("Listening on port 3000");
  });
});