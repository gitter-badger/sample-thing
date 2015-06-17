var assert = require('assert');
var sampleThing = require('..');

describe('sample-thing', function() {
	it('add an !', function() {
		assert.equal(sampleThing('Hi'), 'Hi!')
	});
});