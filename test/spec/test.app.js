define(['app'], function(app) {
	describe('App', function() {
		it('Should define a \'header\' region', function() {
			expect(app.headerRegion).to.exist;
		});

		it('Should define a \'main\' region', function() {
			expect(app.mainRegion).to.exist;
		});
	});

	return {
		name: "App"
	};
});


/*
define(['Squire'], function(Squire) {
	describe('App', function() {

		var testContext = {};

		beforeEach(function(done) {
			testContext.injector = new Squire();
			testContext.injector.require(['app'], function(app) {
				testContext.app = app;
				done();
			});
		});

		it('Should define a \'header\' region', function() {
			expect(testContext.app.headerRegion).to.exist;
		});

		it('Should define a \'main\' region', function() {
			expect(testContext.app.mainRegion).to.exist;
		});
	});

	return {
		name: "App"
	};
});
*/
