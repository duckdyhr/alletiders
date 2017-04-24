'use strict';

(function () {
	angular.module('registration', [])
		.controller('registrationController', function ($scope, $http, userData, registrationService) {
			var ctrl = this;

			//Variabler som bruges til alert boksene's ng-hide attribut
			$scope.hideMsgSuccess = true;
			$scope.hideMsgError = true;
			
			$scope.author = userData.get();
			$scope.hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
			var laugId = 0;
			
			registrationService.getAllLaug(function (data) {
				$scope.laug = data;
			});

			ctrl.defaultForm = {
				selectedProjectLaug: null,
				selectedFrivillig: null,
				selectedHours: $scope.hours[0],
				date: new Date()
			}
			
			$scope.form = angular.copy(ctrl.defaultForm);
		
			//Loader alle frivillige knyttet til valgte laug
			$scope.getMembers = function () {
				registrationService.getMembersInLaug(laugId, function (data) {
					$scope.frivillige = data;
				});
			}

			/*Validerer formen er gyldig før den sendes videre
			Feedback vha hideMsgError og hideMsgSuccess binding til alert boksene*/
			$scope.registerTime = function () {
				if ($scope.timeForm.$valid) {
					registrationService.processRegistration(ctrl.prepareData(), function (response) {
						if (response.success) {
							$scope.hideMsgSuccess = false;
							$scope.hideMsgError = true;
						} else {
							$scope.hideMsgError = false;
							$scope.hideMsgSuccess = true;
						}
					});
					$scope.form = angular.copy(ctrl.defaultForm);
					$scope.timeForm.$setUntouched();
					$scope.timeForm.$setPristine();
				} else {
					$scope.hideMsgError = false;
					$scope.hideMsgSuccess = true;
				}
			};

			//Ændres laug, ændres hvilke medlemmer der vises også
			$scope.laugChanged = function () {
				laugId = $scope.form.selectedProjectLaug.id;
				$scope.getMembers();
			}

			$scope.closeMsgError = function () {
				$scope.hideMsgError = true;
			}

			$scope.closeMsgSuccess = function () {
				$scope.hideMsgSuccess = true;
			}

			$scope.cancel = function () {
				$scope.timeForm.$setPristine();
				$scope.form = angular.copy(ctrl.defaultForm);
				$scope.hideMsgError = true;
				$scope.hideMsgSuccess = true;
			};

			$scope.downloadRegistrations = function () {
				$http.get("app/ajax/csv-handling.php")
					.then(function (response) {
						console.log(response);
					});
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

			/*Formaterer javascript Date obj til string dato php forstår yyyy-m-dd*/
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
