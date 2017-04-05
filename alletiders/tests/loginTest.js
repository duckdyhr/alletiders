describe('loginController', function () {
    beforeEach(module('login'));
    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('$scope.validateUser(u)', function () {
        var $scope, controller;
        beforeEach(function () {
            $scope = {};
            controller = $controller('loginController', {
                $scope: $scope
            });
        });

        it('checks if user obj is empty', function () {
            $scope.email = 'anne@test.com';
            $scope.password = 'anne';
            var temp = {};
            var result = $scope.validateUser(temp);
            expect(result).toBe(false);
        });

        it('checks if user obj is not empty', function () {
            var temp = {
                id: "anne@test.com",
                pw: "anne",
                memberID: "2"
            };
            var result = $scope.validateUser(temp);
            expect(result).toBe(true);
        });
    });
    
    describe('$scope.getUser(id, pw)', function(){
        var $scope, controller;
        beforeEach(function(){
            $scope = {};
            controller = $controller('loginController', {$scope: $scope});
        });
        it('should be defined', function(){
            var result = $scope.getUser('anne@test.com', 'anne');
            expect(result).toBeDefined();
        });
        it('should be empty obj', function(){
            var temp = {};
            var result = $scope.getUser('dummy@test.com', 'dummy');
            expect(result).toEqual(temp);
        });
    });
});
