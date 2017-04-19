describe('loginController', function () {
  beforeEach(module('login'));
  var $controller;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  describe('validate user', function () {
    it('checks if user obj is empty', function () {
      var $scope = {};
      var controller = $controller('loginController', {
        $scope: $scope
      });
      $scope.email = 'anne@test.com';
      $scope.password = 'anne';
      var temp = {};
      var result = $scope.validateUser(temp);
      expect(result).toBe(false);
    })
  });
});
