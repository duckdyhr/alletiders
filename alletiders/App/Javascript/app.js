'use strict';

(function () {
	var app = angular.module('app', ['login', 'registration', 'ngRoute']);

	/*Directive for login. Directive <login> is used both in navbar and on login location*/
	app.directive('login', function () {
		return {
			templateUrl: 'app/views/navLoginView.html',
			controller: 'loginController'
		}
	});

	//Angular routing
	app.config(function ($routeProvider) {
		$routeProvider
			.when('/login', {
				templateUrl: 'app/views/loginView.html'
			})
			.when('/registration', {
				templateUrl: 'app/views/registrationView.html',
				controller: 'registrationController',
				controllerAs: 'registrationCtrl'
			})
			.otherwise({
				redirectTo: '/login'
			});
	}).$inject = ['$routeProvider'];

	/*Function for storing user data.
	The data is stored upon login so it can be used in other views as well.
	Makes sure unauthorized user can't reach locations that demand being logged in
	*/
	app.run(['$rootScope', '$location', 'userData',
		function ($rootScope, $location, userData) {
			$rootScope.$on('$locationChangeStart', function (event, next, current) {
				$('#myNavbar').collapse('hide');
				if (next.endsWith('/registration') && !userData.isSet()) {
					alert("Du er ikke logget ind");
					$location.path('/login');
				}
			});
	}]);
})();
