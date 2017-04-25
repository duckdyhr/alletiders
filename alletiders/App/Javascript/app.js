'use strict';

(function () {
	var app = angular.module('app', ['login', 'registration', 'ngRoute']);
	
    //A directive for the login used in the login-view and the navbar in the index file.
	app.directive('login', function(){
		return {
			templateUrl: 'app/views/navLoginView.html',
			controller: 'loginController'
		}
	});
	
    //Angular routing
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

    /*Function for storing user data.
    The data is stored upon login so it can be used in other views as well.
    */
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
