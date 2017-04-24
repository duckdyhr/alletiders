'use strict';

(function () {
	angular.module('login')
		.factory('loginService', ['$http', function ($http) {
			var service = {};
			
			service.login = function (username, password, callback) {
				$http.get("app/ajax/login.php?id=" + username + "&pw=" + password)
					.then(function (response) {
						if (response.data.success) {
							var user = response.data.user[0];
							callback({
								success: true,
								user: user
							});
						} else {
							callback({
								success: false,
								error: response.data.errorMsg
							});
						}
					});
			};
			
			return service;
	}])
})();