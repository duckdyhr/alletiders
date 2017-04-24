"use strict";

(function () {
	angular.module('app')
		.controller('navbarController', function (userData) {
			this.hideLogin = function(){
				return userData.isSet();
			}
		});
})();
