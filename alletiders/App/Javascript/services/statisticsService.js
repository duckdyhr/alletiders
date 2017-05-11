'use strict';

(function () {
	angular.module('statistics')
		.factory('statisticsService', ['$http', function ($http) {
			var service = {};

			service.getRegistrations = function (callback) {
				$http.get('app/ajax/getAllRegistrations.php')
					.then(function (response) {
						//console.log(response);
						if (response.data.success) {
							callback(response.data.docs);
						}
					})
			}
			return service;
	}])
})();
