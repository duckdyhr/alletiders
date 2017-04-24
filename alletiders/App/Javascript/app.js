'use strict';

(function () {
	var app = angular.module('app', ['login', 'registration', 'ngRoute']);
	
	app.directive('login', function(){
		return {
			templateUrl: 'app/views/navLoginView.html',
			controller: 'loginController'
		}
	});
	
	app.config(function ($routeProvider) {
		$routeProvider
			.when('/login', {
				templateUrl: 'app/views/loginView.html',
				//controller: 'loginController'
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

	app.run(['$rootScope', '$location', 'userData',
		function ($rootScope, $location, userData) {
			$rootScope.$on('$locationChangeStart', function (event, next, current) {
				$('#myNavbar').collapse('hide');
				if (!current.endsWith('/test/')) {
					if ($location.path() !== '/login' && !userData.isSet()) {
						alert("Du er ikke logget ind");
						$location.path('/login');
					}
				}
			});
	}]);
})();
