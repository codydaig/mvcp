'use strict';

var path = require('path');

var db = require(path.resolve('./core/db.js'));

db.knex.schema.hasTable('users').then(function(exists){
  if(!exists){
    db.knex.schema.createTable('users', function(user){
      user.increments('id').primary();
      user.string('email', 255);
      user.string('password', 255);
      user.string('salt', 255);
    }).then(function(table){
      console.log("Created Users Table");
    });
  }
});

var user = db.Model.extend({
  tableName: 'users'
});

db.models.user = user;