(function () {
	angular.module('app')
		.factory('authenticationService', ['$http', 'userData', function ($http, userData) {
			var service = {};

			service.login = function (username, password, callback) {
				$http.get("app/ajax/login.php?id=" + username + "&pw=" + password)
					.then(function (response) {
						console.log("Response");
						console.log(response);
						if (response.data.length > 0) {
							var temp = response.data[0];
							//temp.success = true;
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

			//			service.setCredentials = function (username, password) {
			//				var authdata = (username + ':' + password);
			//				var user = {
			//					id: username,
			//					pw: password
			//				}
			//				userData.set(user);
			//				$http.defaults.headers.common['Authorization'] = 'Basic '; // jshint ignore:line
			//			};

			service.clearCredentials = function () {
				userData.clear();
				$http.defaults.headers.common.Authorization = 'Basic ';
			};
			return service;
	}])
})();
