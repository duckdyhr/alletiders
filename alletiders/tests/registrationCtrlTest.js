"use strict";

describe('registrationController', function(){
	beforeEach(module('app'));
	
	var $controller;
	
	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));
	
	describe('$scope.hours', function(){
		it('checks hours array', function(){
			var $scope = {};
			var controller = $controller('registrationController', {$scope: $scope});
			$scope.hours = [1, 2, 3, 4, 5, 6];
			expect($scope.hours[0]).toEqual(1);
		})
	})
});