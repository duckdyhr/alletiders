<!doctype html>

<html ng-app="app">

<head>
	<title>AlleTiders</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="app/libraries/bootstrap/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="app/stylesheets/css/loginView.css">
	<link rel="stylesheet" type="text/css" href="app/stylesheets/css/registrationView.css">
</head>

<body>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
         		<span class="icon-bar"></span>
         		<span class="icon-bar"></span>
         		<span class="icon-bar"></span>
        		</button>
				<a class="navbar-brand" href="#">AlleTiders</a>
			</div>
			<div class="collapse navbar-collapse" id="myNavbar" ng-controller="logoutController as logoutCtrl">
				<ul class="nav navbar-nav">
					<li><a ng-click="logoutCtrl.logout()"><span class="glyphicon glyphicon-log-out"></span> Log ud</a></li>
				</ul>
			</div>
		</div>
	</nav>

	<ng-view></ng-view>
	
	<!--
	Kan ikke bruge devices' kamera over http
	<div class="container" ng-controller="qrController">
		<qr-scanner ng-success="onSuccess(data)" width="400" height="300"></qr-scanner>
	</div>-->
	
	<script src="app/libraries/jquery/jquery-3.2.0.js"></script>
	<script src="app/libraries/bootstrap/js/bootstrap.js"></script>
	<script src="app/libraries/angular/angular.js"></script>
	<script src="app/libraries/angular-route/angular-route.js"></script>
	<script src="app/libraries/angular-qr-scanner/qr-scanner.js"></script>
	<script src="app/libraries/angular-qr-scanner/src/jsqrcode-combined.min.js"></script>

	<script src="app/javascript/app.js"></script>
	<script src="app/javascript/controller/loginController.js"></script>
	<script src="app/javascript/controller/logoutController.js"></script>
	<script src="app/javascript/controller/registrationController.js"></script>
	<script src="app/javascript/controller/qrController.js"></script>
	<script src="app/javascript/services/loginService.js"></script>
	<script src="app/javascript/services/userData.js"></script>
</body>

</html>
