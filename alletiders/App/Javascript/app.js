var app = angular.module('app', []);

function test() {
  //$('#test').text("Testing app.js");
  document.getElementById("test").innerHTML = x;
};

function add(x, y) {
  return x + y;
}