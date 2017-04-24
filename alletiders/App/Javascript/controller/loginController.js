'use strict';

(function () {
  angular.module('login', [])
    .controller("loginController",
      function ($scope, $http, $location, userData, loginService) {
    
        $scope.email = "";
        $scope.password = "";
        $scope.msgLoginErr = true;
				
        $scope.login = function () {
          loginService.login($scope.email, $scope.password, function (response) {
            if (response.success) {
              userData.set(response.user);
              $location.path('/registration');
            } else {
              $scope.msgLoginErr = false;
            }
          })
        }
      });
})();