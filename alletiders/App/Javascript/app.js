(function () {
    var app = angular.module('app', []);
    app.controller(dbController, function($scope, $http){
//       Eller .put?
        $http.get("hvad.php").then(function(response){
           
       })
    });
})();

function test() {
  //$('#test').text("Testing app.js");
  document.getElementById("test").innerHTML = x;
};

function add(x, y) {
  return x + y;
}

