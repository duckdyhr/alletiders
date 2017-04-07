(function () {
  console.log("registrationController.js is loaded!");
  angular.module('registration', [])
    .controller('registrationController', function ($scope, $http, userData) {
      console.log(userData.get());
      $scope.msgSuccess = true;
      $scope.msgError = true;

      var laugId = 0;

      $http.get("app/ajax/laug.php")
        .then(function (response) {
          $scope.laug = response.data;
        });

      $scope.getMembers = function () {
        $http.get("app/ajax/membersLaug.php?laugId=" + laugId)
          .then(function (response) {
            $scope.frivillige = response.data;
          });
      }

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
        laugId = $scope.form.selectedProjectLaug.id;
        $scope.getMembers();
      }

      $scope.registerTime = function () {

        if ($scope.timeForm.$valid) {
          $scope.msgSuccess = false;
          var tempObj = $scope.form;
          $scope.form = angular.copy(defaultForm);
          $scope.timeForm.$setUntouched();
          $scope.timeForm.$setPristine();

          return tempObj;
        } else {
          $scope.msgError = false;
        }
      };

      $scope.closeMsgError = function () {
        $scope.msgError = true;
      }

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