(function () {
  console.log("app.js is loaded!");
  var app = angular.module('app', ['login', 'registration', 'ngRoute']);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/views/loginView.html',
        controller: 'loginController'
      })
      .when('/registration', {
        templateUrl: 'app/views/registrationView.html',
        controller: 'registrationController'
      })

      .otherwise({
        redirectTo: '/login'
      });
  }).$inject = ['$routeProvider'];
})();