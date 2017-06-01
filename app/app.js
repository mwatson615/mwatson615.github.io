const app = angular.module('myApp', ['ngRoute'])
	app.config(function($routeProvider, $locationProvider) {

		$locationProvider.hashPrefix('')
		$routeProvider
		.when('/', {
			controller: 'HomeCtrl',
			templateUrl: 'partials/home.html'
		})
		.when('/about', {
			controller: 'AboutCtrl',
			templateUrl: 'partials/about.html'
		})
		.when('/projects', {
			controller: 'ProjectsCtrl',
			templateUrl: 'partials/projects.html'
		})
		.otherwise({
			redirectTo: '/'
		})

	})
