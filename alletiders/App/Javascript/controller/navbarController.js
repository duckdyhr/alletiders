"use strict";

(function () {
  angular.module('app')
    .controller('navbarController', function ($location, userData) {

      //Function for hiding the navbar login/logout elements
      this.hideLogin = function () {
        return userData.isSet();
      }
			this.goToStatistics = function(){
				$location.path('/statistics');
			}
    });
})();
