(function () {
  console.log("loginController.js is loaded!");
  angular.module('login', []);

  angular.module('login')
    .controller("loginController", function ($scope, $http, $location) {

      $scope.email = "";
      $scope.password = "";
      $scope.validLogin = false;
      $scope.msgLoginErr = true;
      $scope.user = {};

      $scope.login = function () {
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
              $location.path('/registration');
            } else {
              $scope.msgLoginErr = false;
//              console.log("Response was false");
            }
          });
      }
    });
})();
