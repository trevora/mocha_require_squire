// Partial config file
var require = {
    // Base URL relative to the test runner
    // Paths are relative to this
    baseUrl: '../app/js/',
    paths: {
        'spec' : '../../test/spec',

        'jquery' : 'vendor/jquery-1.8.3',
        'underscore' : 'vendor/underscore',
        'backbone' : 'vendor/backbone',
        'marionette' : 'vendor/backbone.marionette',
        'backbone.eventbinder' : 'vendor/backbone.eventbinder',
        'backbone.wreqr' : 'vendor/backbone.wreqr',
        'backbone.babysitter' : 'vendor/backbone.babysitter',
        'json2': 'vendor/json2',

        // Testing libs
        'chai'          : '../../test/lib/chai',
        'sinon-chai'    : '../../test/lib/sinon-chai',
        'common'        : '../../test/common',
        'Squire'        : '../../test/lib/Squire'
    },
    shim: {
          underscore: {
            exports: '_'
          },
          backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
          }
    },
    deps: ["common"]
};
 
// You can do this in the grunt config for each mocha task, see the `options` config
mocha.setup({
    ui: 'bdd',
    globals:["$", "jQuery", "chai", "expect", "sinonChai"]
});
 
// Protect from barfs
console = window.console || function() {};
 
// Don't track
window.notrack = true;
 
// Mocha run helper, used for browser
var runMocha = function() {
    mocha.run();
};