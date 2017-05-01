'use strict';
//'Model'. ~CRUD user.
(function () {
	angular.module('app')
		.factory('userData', [function () {
			var user = {};

			function set(u) {
				user = u;
			}

			function get() {
				return user;
			}

			function clear() {
				user = {};
			}

			function isSet() {
				if(user == undefined){
					return false;
				}
				return !((user.id==undefined) || (user.pw==undefined));
			}
			return {
				set: set,
				get: get,
				clear: clear,
				isSet: isSet
			}
		}]);
})();
