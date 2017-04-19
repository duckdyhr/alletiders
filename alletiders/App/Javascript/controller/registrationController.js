'use strict';

(function () {
	angular.module('registration', [])
		.controller('registrationController', function ($scope, $http, userData) {
			$scope.msgSuccess = true;
			$scope.msgError = true;

			$scope.author = userData.get();

			var laugId = 0;

			$http.get("app/ajax/laug.php")
				.then(function (response) {
					$scope.laug = response.data;
				});

			$scope.hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

			var defaultForm = {
				selectedProjectLaug: null,
				selectedFrivillig: null,
				selectedHours: $scope.hours[0],
				date: new Date(),
			}

			$scope.form = angular.copy(defaultForm);

			$scope.getMembers = function () {
				$http.get("app/ajax/membersLaug.php?laugId=" + laugId)
					.then(function (response) {
						$scope.frivillige = response.data;
					});
			}

			$scope.processRegistration = function () {
				$http({
						method: 'POST',
						url: 'app/ajax/sendRegistration.php',
						data: $.param($scope.prepareData()),
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					})
					.then(function (data) {
					//console.log("Response sendRegistration.php");
						//console.log(data);
						//og noget mere...
					})
			}

			$scope.prepareData = function () {
				return {
					laugId: $scope.form.selectedProjectLaug.id,
					memberId: $scope.form.selectedFrivillig.id,
					date: $scope.formateDate($scope.form.date),
					hours: $scope.form.selectedHours,
					author: $scope.author.memberID
				}
			}

			$scope.registerTime = function () {
				if ($scope.timeForm.$valid) {
					$scope.processRegistration();
					$scope.msgSuccess = false;
					$scope.msgError = true;
					var tempObj = $scope.form;
					$scope.form = angular.copy(defaultForm);
					$scope.timeForm.$setUntouched();
					$scope.timeForm.$setPristine();
					return tempObj;
				} else {
					$scope.msgError = false;
					$scope.msgSuccess = true;
				}
			};

			$scope.laugChanged = function () {
				laugId = $scope.form.selectedProjectLaug.id;
				$scope.getMembers();
			}

			$scope.closeMsgError = function () {
				$scope.msgError = true;
			}

			$scope.closeMsgSuccess = function () {
				$scope.msgSuccess = true;
			}

			$scope.cancel = function () {
				$scope.timeForm.$setPristine();
				$scope.form = angular.copy(defaultForm);
				$scope.msgError = true;
				$scope.msgSuccess = true;
				console.log("empty");
			};

			$scope.downloadRegistrations = function () {
				$http.get("app/ajax/csv-handling.php")
					.then(function (response) {
						console.log(response);
					});
			}
			$scope.formateDate = function(oldDate){
				var y = oldDate.getFullYear();
				var m = oldDate.getMonth()+1;
				var d = oldDate.getDate();
				console.log(y + '-' + m + '-' + d);
				return y + '-' + m + '-' + d;
			}
		});
})();