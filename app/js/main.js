require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    // Backbone library depends on underscore and jQuery
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    json2: {
      exports: 'JSON'
    }
  },

  paths: {
    // Libraries
    'jquery' : 'vendor/jquery-1.8.3',
    'underscore' : 'vendor/underscore',
    'backbone' : 'vendor/backbone',
    'marionette' : 'vendor/backbone.marionette',
    'backbone.eventbinder' : 'vendor/backbone.eventbinder',
    'backbone.wreqr' : 'vendor/backbone.wreqr',
    'backbone.babysitter' : 'vendor/backbone.babysitter',
    'json2': 'vendor/json2'
  }
});
 
require(['app'], function(app) {
  "use strict";

  // use app here
  app.start();
});

