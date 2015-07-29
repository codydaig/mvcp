'use strict';

var NavbarItemView = Backbone.View.extend({

  tagName: 'li',

  initialize: function(){
  },

  render: function(){
    //return this.$el.html('Hello');
    console.log('hi from inside');
    return $('<li>').text('hello');
  }
});