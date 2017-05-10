<!doctype html>

<html ng-app="app">

<head>
	<title>AlleTiders</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="app/libraries/bootstrap/css/bootstrap.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Acme|Lato">
	<link rel="stylesheet" type="text/css" href="app/stylesheets/css/index.css">
</head>

<body>

	<div ng-controller="navbarController as navCtrl">
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
				<div class="collapse navbar-collapse" id="myNavbar">
					<div class="container">
						<ul class="nav navbar-nav navbar-right">
							<div ng-controller="logoutController as logoutCtrl">
								<li ng-hide="!navCtrl.hideLogin()"><span class="glyphicon glyphicon-log-out"></span><a ng-click="logoutCtrl.logout()"> Logout</a></li>
							</div>
							<li class="divider"></li>
							<div>
								<li ng-hide="navCtrl.hideLogin()">
									<a data-toggle="collapse" data-target="#navLoginPanel"><span class="glyphicon glyphicon-log-in"></span> Login</a>
									<div id="navLoginPanel" class="collapse">
										<login></login>
									</div>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	</div>
	
	<ng-view></ng-view>

	<!--
<<<<<<< HEAD:alletiders/index.html
    Cannot use device camera with http; needs https.
=======
	Kan ikke bruge devices' kamera over http protokollen
>>>>>>> 67a5d7aa57e1b065c6a69ae614cea8c2e0a2c4dd:alletiders/index.php
	<div class="container" ng-controller="qrController">
		<qr-scanner ng-success="onSuccess(data)" width="400" height="300"></qr-scanner>
	</div>-->

	<script src="app/libraries/jquery/jquery-3.2.0.js"></script>
	<script src="app/libraries/bootstrap/js/bootstrap.js"></script>
	<script src="app/libraries/angular/angular.js"></script>
	<script src="app/libraries/angular-route/angular-route.js"></script>
<!--
	<script src="app/libraries/angular-qr-scanner/qr-scanner.js"></script>
	<script src="app/libraries/angular-qr-scanner/src/jsqrcode-combined.min.js"></script>
-->

	<script src="app/javascript/app.js"></script>
	<script src="app/javascript/controller/loginController.js"></script>
	<script src="app/javascript/controller/logoutController.js"></script>
	<script src="app/javascript/controller/registrationController.js"></script>
	<script src="app/javascript/controller/navbarController.js"></script>
<!--	<script src="app/javascript/controller/qrController.js"></script>-->
	<script src="app/javascript/services/loginService.js"></script>
	<script src="app/javascript/services/userData.js"></script>
	<script src="app/javascript/services/registrationService.js"></script>
</body>

</html>
