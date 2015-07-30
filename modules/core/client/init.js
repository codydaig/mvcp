'use strict';

var app = new AppModel();

var appView = new AppView({model: app});
$('#app_container').html(appView.render());


