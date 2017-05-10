"use strict";

describe('userData', function () {

	var userData;

    //Objects for testing
	var valid = {id: 'anne@test.com', pw:'johan', isCustodian: false, memberID:1};
	var empty = {};
	var invalid = {id: 'anne'};
	
    //Note: module() and inject() must be in separate beforeEach() functions
	beforeEach(function () {
		module('app');
	});

	beforeEach(inject(function (_userData_) {
		userData = _userData_;
	}));
	
	it('tests userData is valid', function(){
		expect(userData).toBeDefined();
	});
	
	it('tests set(u) and get() methods', function(){
		userData.set(valid);
		expect(userData.get()).toBeDefined();
		expect(userData.get()).toEqual(valid);
		expect(userData.isSet()).toEqual(true);
	});
	
	it('tests clear() method', function(){
		userData.set(valid);
		expect(userData.get()).toBeDefined();
		userData.clear();
		expect(userData.get()).toEqual(empty);
		expect(userData.isSet()).toEqual(false);
	});
	
	it('tests isSet() method', function(){
		expect(userData.isSet()).toBe(false);
		userData.set(empty);
		expect(userData.isSet()).toBe(false);
		userData.set(valid);
		expect(userData.isSet()).toBe(true);
		userData.set(invalid);
		expect(userData.isSet()).toBe(false);
	});
	
	xdescribe('testing jasmine', function () {
		it('foo to equal foo', function () {
			expect('foo').toEqual('foo');
			expect('foo').not.toEqual('bar');
		});

		it('tests userData user obj is empty', function () {
			expect(userData.get()).toEqual(empty);
		});
	});
});