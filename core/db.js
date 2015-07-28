'use strict';

var path = require('path');

var config = require(path.resolve('./core/config.js'));

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : config.db.host,
    user     : config.db.user,
    password : config.db.pass,
    database : config.db.name,
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

module.exports = exports = bookshelf;