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
  }).$inject=['$routeProvider'];
    
/*
    app.config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'app/views/loginView.html',
                controller: 'app/javascript/controller/loginController'
            })

            .when('/registration', {
                templateUrl: 'app/views/registrationView.html',
                controller: 'app/javascript/controller/registrationController'
            })

            .otherwise({
                redirectTo: '/login'
            });
    }
*/
})();

function test() {
    //$('#test').text("Testing app.js");
    document.getElementById("test").innerHTML = x;
};

function add(x, y) {
    return x + y;
}
