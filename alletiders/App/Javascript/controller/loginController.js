(function () {
    console.log("loginController.js is loaded!");
    angular.module('login', []);

    angular.module('login')
        .controller("loginController", function ($scope, $http, $location) {
        $http.get("app/ajax/login.php")
            .then(function (response) {
                $scope.masterLogins = response.data.records;
            });

        $scope.email = "";
        $scope.password = "";
        $scope.validLogin = false;
        $scope.msgLoginErr = true;
        
        console.log($scope.msgLoginErr);

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
            if ($scope.validLogin != true) {
                $scope.msgLoginErr = false;
                console.log($scope.msgLoginErr);
            } else {
                $location.path('/registration');                
            }
        }
    });
})();
