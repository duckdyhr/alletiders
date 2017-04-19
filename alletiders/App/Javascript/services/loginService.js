'use strict';

(function () {
	angular.module('app')
		.factory('loginService', ['$http', function ($http) {
			var service = {};

			service.login = function (username, password, callback) {
				$http.get("app/ajax/login.php?id=" + username + "&pw=" + password)
					.then(function (response) {
						if (response.data.length > 0) {
							var temp = response.data[0];
							callback({
								success: true,
								user: temp
							});
						} else {
							callback({
								success: false
							});
						}
					});
			};

			return service;
	}])
})();