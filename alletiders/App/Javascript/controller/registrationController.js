'use strict';

(function () {
	angular.module('registration', [])
		.controller('registrationController', function ($scope, $http, userData) {
			var ctrl = this;
      
            //Variables used for the alert-message boxes' ng-hide attribute
			$scope.msgSuccess = true;
			$scope.msgError = true;

			$scope.author = userData.get();

			var laugId = 0;
			
            //Loads all laug/projects from backend
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
			
            /*Loads all 'frivillige' based on selected laug/project.
            */
			$scope.getMembers = function () {
				$http.get("app/ajax/membersLaug.php?laugId=" + laugId)
					.then(function (response) {
						$scope.frivillige = response.data;
					});
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
			
            /*Function for validating the form before it is sent.
            Feedback through 'msgError' or 'msgSuccess' binding for the alert boxes.
            */
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

            //Change listener on the input field 'selectedProjectLaug'.
			$scope.laugChanged = function () {
				laugId = $scope.form.selectedProjectLaug.id;
				$scope.getMembers();
			}

            //Hides the error-message box by setting the value bound to ng-hide to true.
			$scope.closeMsgError = function () {
				$scope.msgError = true;
			}

            //Hides the success-message box by setting the value bound to ng-hide to true.
			$scope.closeMsgSuccess = function () {
				$scope.msgSuccess = true;
			}

            //Clears all form fields, hides all message boxes and sets the form to pristine state.
			$scope.cancel = function () {
				$scope.timeForm.$setPristine();
				$scope.form = angular.copy(defaultForm);
				$scope.msgError = true;
				$scope.msgSuccess = true;
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
