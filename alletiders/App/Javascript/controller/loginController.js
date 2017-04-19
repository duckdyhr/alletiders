'use strict';

(function () {
  console.log("loginController.js is loaded!");
  angular.module('login', [])
    .controller("loginController",
      function ($scope, $http, $location, userData, loginService) {
        $scope.email = "";
        $scope.password = "";
        $scope.msgLoginErr = true;
        //$scope.user = {};
        $scope.loginNew = function () {
          loginService.login($scope.email, $scope.password, function (response) {
            console.log("loginService.loginNew() response");
            console.log(response);
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
