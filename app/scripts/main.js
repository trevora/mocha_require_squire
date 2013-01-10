require.config({
  baseUrl : 'scripts/vendor',
  paths: {
    'app' : '../app'
  },
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
  }
});
 
require(['app/app'], function(app) {
  "use strict";

  // use app here
  app.start();
});

