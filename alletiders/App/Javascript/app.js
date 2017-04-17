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

	app.run(['$rootScope', '$location', 'userData',
		function ($rootScope, $location, userData) {
			$rootScope.$on('$locationChangeStart', function (event, next, current) {
				//console.log("$locationChangeStart event");
				//console.log(userData.get());
				//console.log("isSet: " + userData.isSet());
				if ($location.path() !== '/login' && !userData.isSet()) {
					$location.path('/login');
					alert("Du er ikke logget ind");
				}
			});
	}]);
})();