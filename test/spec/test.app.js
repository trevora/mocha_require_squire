define(['Squire'], function(Squire) {

	var injector = new Squire();

	injector.require(['app'], function(app) {
		describe('App', function() {
			it('Should define a \'header\' region', function() {
				expect(app.headerRegion).to.exist;
			});

			it('Should define a \'main\' region', function() {
				expect(app.mainRegion).to.exist;
			});
		});
	});

	return {
		name: "App"
	};
});
