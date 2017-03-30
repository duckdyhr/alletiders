var app = angular.module('login', []);
app.controller("loginController", function ($scope) {
  
  $scope.validLogin = false;
  
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
    var email = $scope.email;
    var pass = $scope.password;
    
    $scope.validLogin = (validateEmail(email) && validatePassword(pass));
    
    return $scope.validLogin;
  }
});