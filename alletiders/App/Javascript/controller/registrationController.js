'use strict';

(function () {
	angular.module('registration', [])
		.controller('registrationController', function ($scope, $http, userData, registrationService) {
			var ctrl = this;

			//Variables used for the alert-message boxes' ng-hide attribute
			$scope.hideMsgSuccess = true;
			$scope.hideMsgError = true;

			$scope.author = userData.get();
			$scope.hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
			var laugId = 0;

			$scope.hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
			
			/*Load different controls based on isCostudian*/
			if (userData.isCustodian()) {
				//Loads all laug/projects from backend
				registrationService.getAllLaug(
					function (data) {
						$scope.laug = data;
						$("#selectFrivillige").show();
						$("#textFrivillig").hide();
					});
			} else {
				registrationService.getLaugByMember(userData.get().memberID,
					function (data) {
						$scope.laug = data;
						$scope.frivillige = [userData.get()];
						$("#selectFrivillige").hide();
						$("#textFrivillig").show();
					});
			}

			ctrl.defaultForm = {
				selectedProjectLaug: null,
				selectedFrivillig: null,
				selectedHours: $scope.hours[0],
				date: new Date()
			}

			//Sends new registration to the database through the php-file
			$scope.processRegistration = function () {
				$http({
						method: 'POST',
						url: 'app/ajax/sendRegistration.php',
						data: $.param(ctrl.prepareData()),
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					})
					.then(function (data) {
						//and something else...
					})
			}

			/* Function for making the form into a url-/php-friendly JS object.
			Prepares it before it is sent.
			*/
			ctrl.prepareData = function () {
				return {
					laugId: $scope.form.selectedProjectLaug.id,
					memberId: $scope.form.selectedFrivillig.id,
					date: ctrl.formateDate($scope.form.date),
					hours: $scope.form.selectedHours,
					author: $scope.author.memberID
				}
			}

			$scope.form = angular.copy(ctrl.defaultForm);

			/*Loads all 'frivillige' based on selected laug/project.
			 */
			$scope.getMembers = function () {
				if (userData.isCustodian()) {
					registrationService.getMembersInLaug(laugId, function (data) {
						console.log(data);
						$scope.frivillige = data;
					});
				} else {
					$scope.frivillige = [userData.get()];
				}
			}

			/*Function for validating the form before it is sent.
			Feedback through 'msgError' or 'msgSuccess' binding for the alert boxes.
			*/
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

			//Change listener on the input field 'selectedProjectLaug'.
			$scope.laugChanged = function () {
				laugId = $scope.form.selectedProjectLaug.id;
				$scope.getMembers();
			}

			//Hides the error-message box by setting the value bound to ng-hide to true.
			$scope.closeMsgError = function () {
				$scope.hideMsgError = true;
			}

			//Hides the success-message box by setting the value bound to ng-hide to true.
			$scope.closeMsgSuccess = function () {
				$scope.hideMsgSuccess = true;
			}

			//Clears all form fields, hides all message boxes and sets the form to pristine state.
			$scope.cancel = function () {
				$scope.timeForm.$setPristine();
				$scope.form = angular.copy(ctrl.defaultForm);
				$scope.hideMsgError = true;
				$scope.hideMsgSuccess = true;
			};

			//Runs the csv-handling.php file and returns the file for client download.
			$scope.downloadRegistrations = function () {
				$http.get("app/ajax/csv-handling.php")
					.then(function (response) {
						console.log(response);
					});
			}

			//Formats javascript Date object to string-date, so the php-file will understand.
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
