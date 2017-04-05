(function () {
    console.log("app.js is loaded!");
    var app = angular.module('app', ['login', 'registration', 'ngRoute']);
    
    app.user = {};
    
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
})();

function test() {
    //$('#test').text("Testing app.js");
    document.getElementById("test").innerHTML = x;
};

function add(x, y) {
    return x + y;
}
