define([], function() {
	describe('Smoke Test', function() {
		it('Should report a test succeeds', function() {
			expect(0).to.equal(0);
		});
	});

	return {
		name: "Smoketest"
	};
});
