app.controller("testLoginController", function($scope, $http){
   $scope.test = "Testing scope";
    $http.get("../../ajax/login.php")
       .then(function(response){
        $scope.testLogins = response.data.records;
   });
});