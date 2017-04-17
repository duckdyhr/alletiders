"use strict";

(function(){
	angular.module('app')
		.controller("logoutController", function($location, userData){
		this.logout = function(){
			console.log("logging out...");
			userData.clear();
            $location.path('/login');
		}
	});
})();