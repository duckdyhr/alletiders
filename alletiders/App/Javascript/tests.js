(function(){
    var app = angular.module('tests', ['ngRoute']);
    
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            template: "<p>Testing template</p>",
            controller: "testController"
        })
        .otherwise({
            redirectTo: '/'
        });
    }]);
    
    app.controller('testController', function($scope){
        $scope.message = "Testing ng-routing";
    });
})();