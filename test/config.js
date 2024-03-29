// Partial config file
var require = {
    // Base URL relative to the test runner
    // Paths are relative to this
    baseUrl: '../app/scripts/vendor',
    paths: {
        'app' : '../app',
        'test' : '../../../test',
        'spec' : '../../../test/spec',

        // Testing libs
        'Squire'        : '../../../test/lib/Squire'
    },
    shim: {
          underscore: {
            exports: '_'
          },
          backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
          }
    }
};

var expect = chai.expect;
 
// You can do this in the grunt config for each mocha task, see the `options` config
mocha.setup({
    ui: 'bdd',
    globals:["$", "jQuery", "_", "Backbone", "Marionette"]
});

// Protect from barfs
console = window.console || function() {};
 
// Don't track
window.notrack = true;
 
// Mocha run helper, used for browser
var runMocha = function() {
    mocha.run();
};
