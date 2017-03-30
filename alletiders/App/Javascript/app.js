(function () {
  var app = angular.module('app', ['login', 'registration', 'ngRoute']);
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

function test() {
  //$('#test').text("Testing app.js");
  document.getElementById("test").innerHTML = x;
};

function add(x, y) {
  return x + y;
}

