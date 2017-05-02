'use strict';

(function () {
  angular.module('login')
    .factory('loginService', ['$http', function ($http) {
      var service = {};
      
      /* Service helper-function for validating the user.
      The functio calls the login-php file with a given username and password, where it will be validated.
      On success, the 'then'-response will contain an object with the user, which will then be returned in a separate callback response.
      */
			var convertToBoolean = function(input){
				if(input == 1){
					return true;
				}else{
					return false;
				}
			}
      service.login = function (username, password, callback) {
        $http.get("app/ajax/login.php?id=" + username + "&pw=" + password)
          .then(function (response) {
            if (response.data.success) {
              var temp = response.data.user[0];
              callback({
                success: true,
                user: {
									id: temp.id,
									name: temp.name,
									memberID: temp.memberID,
									isCustodian: convertToBoolean(temp.isCustodian)
								}
              });
            } else {
              callback({
                success: false,
                error: response.data.errorMsg
              });
            }
          });
      };

      return service;
	}])
})();
