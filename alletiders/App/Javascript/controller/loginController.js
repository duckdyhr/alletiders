'use strict';

(function () {
	console.log("loginController.js is loaded!");
	angular.module('login', [])
		.controller("loginController",
			function ($scope, $http, $location, userData, authenticationService) {
				authenticationService.clearCredentials();
				console.log("New logincontroller");
				$scope.loginNew = function () {
					authenticationService.login($scope.email, $scope.password, function (response) {
						console.log("authenticationService.loginNew() response");
						console.log(response);
						if (response.success) {
							//authenticationService.setCredentials($scope.email, $scope.password);
							userData.set(response.user);
							$location.path('/registration');
						} else {
							$scope.msgLoginErr = false;
						}
					})
				}

				$scope.email = "";
				$scope.password = "";
				$scope.msgLoginErr = true;
				$scope.user = {};
/*
				$scope.login = function () {
					console.log("login clicked!");
					var id = $scope.email;
					var pw = $scope.password;

					$http.get("app/ajax/login.php?id=" + id + "&pw=" + pw)
						.then(function (response) {
							//            console.log(response);
							if (response.data.length > 0) {
								$scope.user = response.data[0]
								//              console.log($scope.user);
								return true;
							} else {
								return false;
							}
						})
						.then(function (response) {
							if (response) {
								//              console.log("Response was true");
								userData.set($scope.user);
								$location.path('/registration');
							} else {
								$scope.msgLoginErr = false;
								//              console.log("Response was false");
							}
						});
				}
				*/
			});
})();
