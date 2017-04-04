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

            $scope.getUser = function getUser(id, pw) {
                $http.get("app/ajax/login.php?id=" + id + "&pw=" + pw)
                    .then(function (response) {
                        if (response.data.length > 0) {
                            $scope.user = response.data[0];
                            console.log("$scope.user");
                            console.log($scope.user);
                            $scope.validLogin = true;
                            console.log("Valid login " + $scope.validLogin);
                        } else {
                            $scope.validLogin = false;
                        }
                    });
            }

            function validateEmail(email) {
                if (email == $scope.user.id) {
                    return true;
                } else {
                    return false;
                }
            }

            function validatePassword(pass) {
                if (pass == $scope.user.pw) {
                    return true;
                } else {
                    return false;
                }
            }

            $scope.login = function () {
                $scope.getUser($scope.email, $scope.password, function () {
                    //$scope.validLogin = (validateEmail($scope.email) && validatePassword($scope.password));
                    console.log("login Valid login: " + $scope.validLogin);
                    if ($scope.validLogin == false) {
                        $scope.msgLoginErr = false;
                        console.log("msgLoginErr " + $scope.msgLoginErr);
                    } else {
                        console.log("changing paths");
                        $location.path('/registration');
                    }
                }());
            }
        });
})();
