var app = angular.module('login', [])

app.controller("loginController", function ($scope, $window) {

  $scope.validLogin = false;
  $scope.msgLoginErr = true;

  var dummy = {
    email: "dummy@test.com",
    password: "dummy"
  };

  function validateEmail(email) {
    if (email == dummy.email) {
      return true;
    } else {
      return false;
    }
  }

  function validatePassword(pass) {
    if (pass == dummy.password) {
      return true;
    } else {
      return false;
    }
  }

  $scope.login = function () {

    $scope.validLogin = (validateEmail($scope.email) && validatePassword($scope.password));

    console.log($scope.validLogin);

    if ($scope.validLogin == true) {
      $window.location.href = 'registrationView.html';
    } else {
      $scope.msgLoginErr = false;
    }
  }
});