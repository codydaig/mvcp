'use strict';

var AppModel = Backbone.Model.extend({
  initialize: function(){
    this.set('navbar', new Navbar());
    this.get('navbar').add(new NavbarItem());
  }
});