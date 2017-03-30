var app = angular.module('login', []);

app.controller("loginController", function ($scope, $http) {
    $http.get("../../ajax/login.php")
            .then(function(response){
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
        var email = $scope.email;
        var pass = $scope.password;

        $scope.validLogin = (validateEmail(email) && validatePassword(pass));
        console.log(masterLogins);
        //return $scope.validLogin;
    }
});
