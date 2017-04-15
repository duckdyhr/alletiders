'use strict';

(function () {
	angular.module('app')
		.factory('userData', function () {
			var user = {};
			var isSet = false;

			function set(u) {
				user = u;
				isSet = true;
			}

			function get() {
				return user;
			}

			function clear() {
				user = {};
				isSet = false;
			}

			function isSet() {
				return isSet;
			}
			return {
				set: set,
				get: get,
				clear: clear,
				isSet: isSet
			}
		})
})();
