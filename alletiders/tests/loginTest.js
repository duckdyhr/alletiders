describe('login http test', function () {
	it('runs a test with correct username and correct pasword', inject(function ($http, $httpBackend) {
		var $scope = {};

		$scope.username = "johan@test.com";
		$scope.password = "johan";

		function loginTest(username, password) {
			$http.get("app/ajax/login.php?id=" + username + "&pw=" + password)
				.then(function (response) {
					$scope.data = response.data;
//					console.log($scope.data);
				});
		}

		$httpBackend
			.when('GET', "app/ajax/login.php?id=johan@test.com&pw=johan")
			.respond(200, {
				id: 'johan@test.com',
				memberID: 1,
				pw: 'johan'
			});

		loginTest($scope.username, $scope.password);
		$httpBackend.flush();

		expect($scope.data.id).toBe("johan@test.com");
		expect($scope.data.memberID).toBe(1);
		expect($scope.data.pw).toBe("johan");
	}));

	it('runs a test with no username and no pasword', inject(function ($http, $httpBackend) {
		var $scope = {};

		$scope.username = "";
		$scope.password = "";

		function loginTest(username, password) {
			$http.get("app/ajax/login.php?id=" + username + "&pw=" + password)
				.then(function (response) {
					$scope.data = response.data;
					console.log($scope.data);
				});
		}

		$httpBackend
			.when('GET', "app/ajax/login.php?id=johan@test.com&pw=johan")
			.respond(200, {
				id: 'johan@test.com',
				memberID: 1,
				pw: 'johan'
			});

		loginTest($scope.username, $scope.password);
		expect($httpBackend.flush).toThrow();
		expect($scope.data).toBeUndefined();
	}));

	it('runs a test with wrong username and wrong pasword', inject(function ($http, $httpBackend) {
		var $scope = {};

		$scope.username = "anne@test.com";
		$scope.password = "anne";

		function loginTest(username, password) {
			$http.get("app/ajax/login.php?id=" + username + "&pw=" + password)
				.then(function (response) {
					$scope.data = response.data;
					console.log($scope.data);
				});
		}

		$httpBackend
			.when('GET', "app/ajax/login.php?id=johan@test.com&pw=johan")
			.respond(200, {
				id: 'johan@test.com',
				memberID: 1,
				pw: 'johan'
			});

		loginTest($scope.username, $scope.password);
		expect($httpBackend.flush).toThrow();
		expect($scope.data).toBeUndefined();

	}));

	it('runs a test with right username and wrong pasword', inject(function ($http, $httpBackend) {
		var $scope = {};

		$scope.username = "johan@test.com";
		$scope.password = "anne";

		function loginTest(username, password) {
			$http.get("app/ajax/login.php?id=" + username + "&pw=" + password)
				.then(function (response) {
					$scope.data = response.data;
					console.log($scope.data);
				});
		}

		$httpBackend
			.when('GET', "app/ajax/login.php?id=johan@test.com&pw=johan")
			.respond(200, {
				id: 'johan@test.com',
				memberID: 1,
				pw: 'johan'
			});

		$httpBackend
			.when('GET', "app/ajax/login.php?id=anne@test.com&pw=anne")
			.respond(200, {
				id: 'anne@test.com',
				memberID: 2,
				pw: 'anne'
			});

		loginTest($scope.username, $scope.password);
		expect($httpBackend.flush).toThrow();
		expect($scope.data).toBeUndefined();

	}));

	it('runs a test with wrong username and right pasword', inject(function ($http, $httpBackend) {
		var $scope = {};

		$scope.username = "anne@test.com";
		$scope.password = "johan";

		function loginTest(username, password) {
			$http.get("app/ajax/login.php?id=" + username + "&pw=" + password)
				.then(function (response) {
					$scope.data = response.data;
					console.log($scope.data);
				});
		}

		$httpBackend
			.when('GET', "app/ajax/login.php?id=johan@test.com&pw=johan")
			.respond(200, {
				id: 'johan@test.com',
				memberID: 1,
				pw: 'johan'
			});

		$httpBackend
			.when('GET', "app/ajax/login.php?id=anne@test.com&pw=anne")
			.respond(200, {
				id: 'anne@test.com',
				memberID: 2,
				pw: 'anne'
			});

		loginTest($scope.username, $scope.password);
		expect($httpBackend.flush).toThrow();
		expect($scope.data).toBeUndefined();

	}));
});
