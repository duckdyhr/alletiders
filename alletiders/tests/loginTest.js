describe('loginController', function(){
  beforeEach(module('login'));
  
  var $controller;
  
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
  
  describe('validateLogin test', function(){
    var $scope, controller;
    
    beforeEach(function() {
      $scope = {
        email: "dummy@test.com",
        password: "dummy"
      };
      controller = $controller('loginController', {$scope: $scope});
    });
    
    it('should validate email and password', function() {
      expect($scope.login()).toBe(true);
    })
    
//    it('should validate email', function() {
//      expect($scope.validateEmail('dummy@test.com')).toBe(true);
//    })
//    
//    it('should validate password', function(){
//      expect($scope.validatePassword('dummy')).toBe(true);
//    });
  });
});