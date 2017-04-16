"use strict";

(function(){
	angular.module('app')
		.controller("logoutController", function(userData){
		this.logout = function(){
			console.log("logging out...");
			userData.clear();
		}
	});
})();