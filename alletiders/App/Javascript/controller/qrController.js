"use strict";

(function () {
	angular.module('app')
		.controller("qrController", function ($scope) {
			$scope.onSuccess = function (data) {
				console.log(data);
			};
			$scope.onError = function (error) {
				console.log(error);
			};
			$scope.onVideoError = function (error) {
				console.log(error);
			};
	});
})();