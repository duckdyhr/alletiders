'use strict';

(function () {
	console.log("app.js is loaded! v 1.0");
	var app = angular.module('app', ['login', 'registration', 'ngRoute']);
	
	app.config(function ($routeProvider) {
		$routeProvider
			.when('/login', {
				templateUrl: 'app/views/loginView.html',
				controller: 'loginController'
			})
			.when('/registration', {
				templateUrl: 'app/views/registrationView.html',
				controller: 'registrationController'
			})

			.otherwise({
				redirectTo: '/login'
			});
	}).$inject = ['$routeProvider'];

	/*app.run(['$rootScope', '$location', '$http', 'userData', 'authenticationService', function ($rootScope, $location, $http, userData, authenticationService) {
		authenticationService.clear();
		if (userData.isSet()) {
			//TODO!
			$http.defaults.headers.common['Authorization'] = 'Basic '; // jshint ignore:line
		}

		$rootScope.$on('$locationChangeStart', function (event, next, current) {
			//redirect to login page if not logged in
			if ($location.path() !== '/login' && !userData.isSet()) {
				$location.path('/login');
			}
		});
	}])*/
})();