(function () {
    console.log("registrationController.js is loaded!");
    var app = angular.module('registration', []);

    app.controller('registrationController', function ($scope, $http, userData) {
        console.log(userData.get());
        $scope.msgSuccess = true;

        $http.get("app/ajax/laug.php")
            .then(function (response) {
                $scope.laug = response.data;
            });

        $http.get("app/ajax/membersLaug.php")
            .then(function (response) {
                $scope.frivillige = response.data;
            });

        $scope.hours = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12];

        var defaultForm = {
            selectedProjectLaug: null,
            selectedFrivillig: null,
            selectedHours: $scope.hours[3],
            date: new Date(),
            author: userData.get().id
        }

        $scope.form = angular.copy(defaultForm);

        $scope.laugChanged = function () {
            console.log("laug changed!");
            console.log($scope.frivillige);
            console.log($scope.laug);
        }

        $scope.registerTime = function () {
            var registrationParams = JSON.stringify($scope.form);
            $http.post("...?x="+registrationParams);
            
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

        $scope.downloadRegistrations = function () {
            console.log("Funktionen bliver kaldt!");
            $http.get("app/ajax/csv-handling.php")
                .then(function (response) {
                    console.log(response);
                });
        }
    });
})();
