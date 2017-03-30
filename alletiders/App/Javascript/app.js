(function () {
  var app = angular.module('app', ['ngRoute']);
  app.controller(dbController, function ($scope, $http) {
    //       Eller .put?
    $http.get("hvad.php").then(function (response) {

    })
  });
  
  app.config(config);
  
  config.$inject = ['$routeProvider', '$locationProvider'];
  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/loginView.html',
        controller: 'controller/loginController'
    })
    
    .when('/registration', {
        templateUrl: 'views/registrationView.html',
        controller: 'controller/registrationController'
    })
    
    .otherwise({ redirectTo: '/login'});
  }
  
})();