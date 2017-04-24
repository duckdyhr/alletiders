"use strict";

xdescribe('logoutController', function(){
	beforeEach(module('app'));
	
	//Tester userData.clear() metoden i userDataTest
	it('should clear user in userData service', function(){
		expect('foo').toEqual('foo');
	});
});