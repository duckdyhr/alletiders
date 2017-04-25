"use strict";

(function () {
	angular.module('app')
		.controller("logoutController", function ($location, userData) {
      
            //Function for logout. Redirects to login-page and clears stored user data.
			this.logout = function () {
				$location.path('/login');
				userData.clear();
			}
		});
})();