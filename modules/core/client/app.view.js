'use strict';

var AppView = Backbone.View.extend({

  initialize: function(){
    this.NavbarView = new NavbarView({collection: this.model.get('navbar')});
  },

  render: function(){
    return this.NavbarView.$el;
  }
});