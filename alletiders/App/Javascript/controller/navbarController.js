"use strict";

(function () {
	angular.module('app')
		.controller('navbarController', function (userData) {
			console.log("navbarController loaded!");
			this.hideLogin = function(){
				return userData.isSet();
			}
		});
})();
