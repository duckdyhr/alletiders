'use strict';

(function () {
	var app = angular.module('statistics', []);
	app.controller('statisticsController', statsController);

	statsController.$inject = ['statisticsService'];

	function statsController(statisticsService) {
		var ctrl = this;
		ctrl.test = "Testing dependency";
		ctrl.data = [];

		function compareByTheme(a, b) {
			var x = a.theme.toLowerCase();
			var y = b.theme.toLowerCase();
			if (x < y) {
				return -1;
			}
			if (x > y) {
				return 1;
			}
			return 0;
		}
		function compareByLaug(a, b) {
			var x = a.laug.toLowerCase();
			var y = b.laug.toLowerCase();
			if (x < y) {
				return -1;
			}
			if (x > y) {
				return 1;
			}
			return 0;
		}
		function compareByName(a, b){
			var x = a.name.toLowerCase();
			var y = b.name.toLowerCase();
			if (x < y) {
				return -1;
			}
			if (x > y) {
				return 1;
			}
			return 0;
		}
		statisticsService.getRegistrations(
			function (data) {
				//console.log(data);
				//Sort first by theme, then by laug(, then by name)
				data.sort(function(a, b){
					return compareByTheme(a, b) || compareByLaug(a, b) || compareByName(a, b);
				});
				
				ctrl.data = data;
			});
	};
})();
