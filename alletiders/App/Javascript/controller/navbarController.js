"use strict";

(function () {
  angular.module('app')
    .controller('navbarController', function (userData) {

      //Function for hiding the navbar login/logout elements
      this.hideLogin = function () {
        return userData.isSet();
      }
    });
})();
