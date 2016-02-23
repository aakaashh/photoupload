var app = angular.module('PhotoApp', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html'
		})
		.when('/upload', {
			templateUrl: 'partials/upload.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);