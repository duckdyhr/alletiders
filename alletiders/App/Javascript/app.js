'use strict';

(function () {
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
				console.log("Next " + next);
				console.log("Current " + current);
				console.log($location.path());

				console.log($location.search());
				if (!current.endsWith('/test/')) {
					if ($location.path() !== '/login' && !userData.isSet()) {
						alert("Du er ikke logget ind");
						$location.path('/login');
					}
				}
			});
	}]);
})();
