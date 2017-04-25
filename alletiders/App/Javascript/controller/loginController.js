'use strict';

(function () {
//  console.log("loginController.js is loaded!");
  angular.module('login', [])
    .controller("loginController",
      function ($scope, $http, $location, userData, loginService) {

        $scope.email = "";
        $scope.password = "";
        $scope.msgLoginErr = true;

        /* Login-function for view; logs the user in, if they are registered as a user in the database.
        The function calls the service function 'login' with the email and password from the user-input.
        On success, it will direct to the registration view, otherwise it will show an error message.
        */
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
