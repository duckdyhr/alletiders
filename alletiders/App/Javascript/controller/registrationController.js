'use strict';

(function () {
	angular.module('registration', [])
		.controller('registrationController', function ($scope, $http, userData) {
			var ctrl = this;
		//Variabler som bruges til alert boksene's ng-hide attribut
			$scope.msgSuccess = true;
			$scope.msgError = true;

			$scope.author = userData.get();

			var laugId = 0;
			
			//Loader alle laug fra backend
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
			
			//Loader alle frivillige knyttet til valgte laug
			$scope.getMembers = function () {
				$http.get("app/ajax/membersLaug.php?laugId=" + laugId)
					.then(function (response) {
						$scope.frivillige = response.data;
					});
			}

			//Sender ny registrering til database
			$scope.processRegistration = function () {
				//console.log(ctrl.prepareData());
				$http({
						method: 'POST',
						url: 'app/ajax/sendRegistration.php',
						data: $.param(ctrl.prepareData()),
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					})
					.then(function (data) {
						//console.log(data);
						//og noget mere...
					})
			}

			//Formen bliver url/php venligt JS objekt
			ctrl.prepareData = function () {
				return {
					laugId: $scope.form.selectedProjectLaug.id,
					memberId: $scope.form.selectedFrivillig.id,
					date: ctrl.formateDate($scope.form.date),
					hours: $scope.form.selectedHours,
					author: $scope.author.memberID
				}
			}
			
			//Validerer formen er gyldig før den sendes videre
			//Feedback vha msgError og msgSuccess binding til alert boksene
			$scope.registerTime = function () {
				if ($scope.timeForm.$valid) {
					$scope.processRegistration();
					$scope.msgSuccess = false;
					$scope.msgError = true;
					//var tempObj = $scope.form;
					$scope.form = angular.copy(defaultForm);
					$scope.timeForm.$setUntouched();
					$scope.timeForm.$setPristine();
					//return tempObj;
				} else {
					$scope.msgError = false;
					$scope.msgSuccess = true;
				}
			};

			//Ændres laug, ændres hvilke medlemmer der vises også
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
			};

			$scope.downloadRegistrations = function () {
				$http.get("app/ajax/csv-handling.php")
					.then(function (response) {
						console.log(response);
					});
			}
			
			//Formaterer javascript Date obj til string dato php forstår
			ctrl.formateDate = function (oldDate) {
				try {
					var y = oldDate.getFullYear();
					var m = oldDate.getMonth() + 1;
					var d = oldDate.getDate();
					return y + '-' + m + '-' + d;
				} catch (err) {
					//alert('Ugyldig dato');
					throw 'not a valid date';
				}
			}
		});
})();
