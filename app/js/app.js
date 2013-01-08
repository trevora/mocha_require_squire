define(['marionette'], function(Marionette) {
  "use strict";

  var app = new Marionette.Application();

  app.addRegions({
  	headerRegion : '#header',
  	mainRegion : '#main'
  });

  return app;
});