"use strict";
//Svært at teste denne controller, da mest sidder på $scope.
describe('registrationController', function () {
	beforeEach(module('app'));

	var $controller;
	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));

	var $scope, controller;
	beforeEach(function () {
		$scope = {};
		controller = $controller('registrationController', {
			$scope: $scope
		});
	});

	it('checks hours array', function () {
		$scope.hours = [1, 2, 3, 4, 5, 6];
		expect($scope.hours[0]).toEqual(1);
	});

	it('checks formateDate method', function () {
		var today = new Date();
		var validDate = new Date(1492699647582);
		var notDateObj = '2017-4-20';
		var weirdDate = new Date('2017-2');
		
		var result = controller.formateDate(today);
		expect(result).toBeDefined();
		result = controller.formateDate(validDate);
		expect(result).toBeDefined();
		expect(result).toEqual('2017-4-20');
//		expect(controller.formateDate(notDateObj)).toThrow('not a valid date');
	});

	xit('checks laug list', function () {
		expect($scope.laug).toBeDefined();
	});
});
