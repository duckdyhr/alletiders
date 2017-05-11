'use strict';

(function () {
	angular.module('registration')
		.factory('registrationService', ['$http', function ($http) {
			var service = {};

			/*Sends a new registrationform to the database*/
			service.processRegistration = function (registration, callback) {
				$http({
					method: 'POST',
					url: 'app/ajax/sendRegistration.php',
					data: $.param(registration),
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).then(function (response) {
					if (response.data.success) {
						callback({
							success: true
						});
					} else {
						callback({
							success: false
						});
					}
				});
			}

			/*Loads all laug from database*/
			service.getAllLaug = function (callback) {
				$http.get("app/ajax/laug.php")
					.then(function (response) {
						callback(response.data);
					});
			}

			/*Loads all laug connected to a member from database*/
			service.getLaugByMember = function (memberId, callback) {
				$http.get("app/ajax/laugByMember.php?id=" + memberId)
					.then(function (response) {
						//console.log(response);
						callback(response.data);
					});
			}

			/*Loads members of a given laug*/
			service.getMembersInLaug = function (laugId, callback) {
				$http.get("app/ajax/membersLaug.php?laugId=" + laugId)
					.then(function (response) {
						callback(response.data);
					});
			}
			return service;
	}])
})();
