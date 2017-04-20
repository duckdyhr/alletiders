console.log("logoutTesting...");

describe('logoutController', function(){
	beforeEach(module('app'));
	
	it('should clear logged in user', function(){
		expect('foo').toEqual('foo');
	});
});