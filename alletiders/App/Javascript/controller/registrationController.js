(function () {
    console.log("registrationController.js is loaded!");
    var app = angular.module('registration', []);

    app.controller('registrationController', function ($scope, $http, userData) {
        $scope.msgSuccess = true;

        $http.get("app/ajax/laug.php")
            .then(function (response) {
                $scope.laug = response.data;
            });

        $scope.frivillige = ["dummy"];

        console.log(userData.get());

        var defaultForm = {
            selectedProjectLaug: null,
            selectedFrivillig: null,
            hours: NaN,
            date: undefined,
            author: null
        }

        $scope.downloadRegistrations = function () {
            console.log("Funktionen bliver kaldt!")
            $http.get("app/ajax/csv-handling.php").then(function (response) {
                console.log(response);
            });
        }

        $scope.form = angular.copy(defaultForm);

        $scope.laugChanged = function () {
            console.log("laug changed!");
        }

        $scope.registerTime = function () {

            if ($scope.timeForm.$valid) {
                $scope.msgSuccess = false;

                var tempObj = $scope.form;
                $scope.form = angular.copy(defaultForm);
                $scope.timeForm.$setUntouched();
                $scope.timeForm.$setPristine();

                return tempObj;
            }
        };

        $scope.cancel = function () {
            $scope.timeForm.$setPristine();
            $scope.form = angular.copy(defaultForm);
            console.log("empty");
        };
    });
})();
