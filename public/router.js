var Workspace = Backbone.Router.extend({

  routes: {
    "help":                 "help"   // #help
    //"search/:query":        "search",  // #search/kiwis
    //"search/:query/p:page": "search"   // #search/kiwis/p7
  },

  help: function() {
    console.log("HELP!!");
    window.app.get('navbar').add(new NavbarItem());
  }


});

new Workspace();

// Backbone.history.start({pushState: true});