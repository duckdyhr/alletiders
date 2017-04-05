(function () {
    console.log("loginController.js is loaded!");
    angular.module('login', []);

    angular.module('login')
        .controller("loginController", function ($scope, $http, $location) {
            console.log("v 1.9");

            $scope.email = "";
            $scope.password = "";
            $scope.validLogin = false;
            $scope.msgLoginErr = true;
            $scope.user = {};

            $scope.getUser = function (id, pw) {
                var that = this;
                that.user = {};
                $http.get("app/ajax/login.php?id=" + id + "&pw=" + pw)
                    .then(function (response) {
                        if (response.data.length > 0) {
                            that.user = response.data[0];
                            console.log("that.user " + that.user);
                        }
                    });
                return that.user;
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

            $scope.validateUser = function (u) {
                return !isEmpty(u);
            }

            $scope.login = function () {
                var temp = $scope.getUser($scope.email, $scope.password);
                if ($scope.validateUser(temp)) {
                    $scope.user = temp;
                    $scope.validLogin = true;
                    console.log("Valid login: " + $scope.validLogin);

                    console.log("changing paths");
                    $location.path('/registration');
                } else {
                    $scope.msgLoginErr = false;
                    console.log("msgLoginErr " + $scope.msgLoginErr);
                }
            }
        });

    function isEmpty(obj) {

        // null and undefined are "empty"
        if (obj == null) return true;

        // Assume if it has a length property with a non-zero value
        // that that property is correct.
        if (obj.length > 0) return false;
        if (obj.length === 0) return true;

        // If it isn't an object at this point
        // it is empty, but it can't be anything *but* empty
        // Is it empty?  Depends on your application.
        if (typeof obj !== "object") return true;

        // Otherwise, does it have any properties of its own?
        // Note that this doesn't handle
        // toString and valueOf enumeration bugs in IE < 9
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) return false;
        }

        return true;
    }
})();
