(function () {
    //Wrapper javascript i en closure - apparently a good habit.
    var app = angular.module('alletiders', []);

    app.controller('testController', function ($scope) {
        $scope.userid = "Id1";
        $scope.userpw = "pw";
        $scope.data = persons;
    });
    
    function person(fname, lname){
        return {firstname: fname, lastname: lname};  
    };
    
    var persons = [
        person('Anne', 'Dyhr'), 
        person('Johan', 'Keller')
    ];
})();

//Test functions for Jasmine...
function test() {
    //$('#test').text("Testing app.js");
    document.getElementById("test").innerHTML = x;
};

function add(x, y) {
    return x + y;
}
