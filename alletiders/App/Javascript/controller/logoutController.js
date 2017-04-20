"use strict";

(function () {
	angular.module('app')
		.controller("logoutController", function ($location, userData) {
			this.logout = function () {
				$location.path('/login');
				userData.clear();
			}
		});
})();