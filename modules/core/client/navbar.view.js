'use strict';

var NavbarView = Backbone.View.extend({

  initialize: function(){
    //this.headerView = new HeaderView({model: this.model})
    this.collection.on('add remove', this.renderItems, this);
    this.render();
  },

  renderItems: function() {
    console.log('rendering items');
    var $nb_nb = $('#navbar');
    $nb_nb.children().detach();
    $nb_nb.addClass('navbar-collapse');
    $nb_nb.addClass('collapse');

    var $nb_ul = $('<ul>').addClass('nav').addClass('navbar-nav');
    this.collection.each(function(model){
      $nb_ul.append(new NavbarItemView({model: model}).render());
    });
    

    $nb_nb.append($nb_ul);

    return $nb_ul;
  },

  render: function(){
    this.$el.children().detach();
    //$nb = this.$el;
    

    console.log("rendering navbar");

    // Note: for readability nb is abbreviation for navbar
    this.$el = $('<nav>').addClass('navbar').addClass('navbar-default').addClass('navbar-fixed-top');
      var $nb_container = $('<div>').addClass('container');
      this.$el.append($nb_container);
      
      // Create the Header Div for inside the navbar
      var $nb_header = $('<div>').addClass('navbar-header');
        
        // Create the Navigation Toggle Button
        // Note: rb is abbreviation for toggle button
        var $nb_tb = $('<button>').addClass('navbar-toggle').addClass('collapsed');
        $nb_tb.attr('data-toggle', 'collapse');
        $nb_tb.attr('data-target', '#navbar');
        $nb_tb.attr('aria-expanded', 'false');
        $nb_tb.attr('aria-controls', 'navbar');
        // Add Text to the button if read by a screenreader
        $nb_tb.append($('<span>').addClass('sr-only').text('Toggle Navigation'));
        // Display three icon bars for toggle button on small screens
        $nb_tb.append($('<span>').addClass('icon-bar'));
        $nb_tb.append($('<span>').addClass('icon-bar'));
        $nb_tb.append($('<span>').addClass('icon-bar'));
        // Append the toggle button to the navbar (should go above nb_brand)
        $nb_header.append($nb_tb);

        // Create the Navbar Brand (it's just hyperlinked text in this case)
        var $nb_brand = $('<a>').addClass('navbar-brand').attr('href', '#').text('NavBar Header');
        // Append the header brand (logo or title) to the navbar
        $nb_header.append($nb_brand);
      
      // Append the navbar header to the navbar container
      $nb_container.append($nb_header);

        // Create the navbar div that holds the ul of links
        var $nb_nb = $('<div>').attr('id', 'navbar');
        $nb_nb.append(this.renderItems());


      $nb_container.append($nb_nb);

    // Set the navbar element to $el
    
    //this.$el = $nb;

    //console.log(this.$el);
    
    console.log('almost done');
    return this.$el;
  }
});