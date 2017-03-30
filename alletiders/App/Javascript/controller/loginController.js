(function () {
    var app = angular.module('login', []);
    app.controller("testLoginController", function ($scope, $http) {
        $scope.test = "Testing scope";
        $http.get("../../ajax/login.php")
            .then(function (response) {
                $scope.testLogins = response.data.records;
            });
    });
    app.controller("loginController", function ($scope, $http) {
        $http.get("../../ajax/login.php")
            .then(function (response) {
                $scope.masterLogins = response.data.records;
            });

        $scope.email = "";
        $scope.password = "";
        $scope.validLogin = false;

        /*$scope.login = function(){
            console.log("Logging in "); with " + user + " " + pw);
            $http.get("../ajax/login.php")
                .then(function(response){
                    $scope.logins = response.data.records;
            });
        }*/
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
            console.log($scope.masterLogins);
            if ($scope.validLogin == true) {
                $window.location.href = 'registrationView.html';
            } else {
                $scope.msgLoginErr = false;
            }
        }
    });
})();
