angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	//$locationProvider.html5Mode(true)

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html'
		})

		.state('unit', {
			url: '/unit',
			templateUrl: 'views/unit.html',
			controller: 'unitCtrl'
		})

		.state('room', {
			url: '/room',
			templateUrl: 'views/room.html',
			controller: 'roomCtrl'
		})

		.state('student', {
			url: '/student',
			templateUrl: 'views/student.html',
			controller: 'studentCtrl'
		})

        .state('book', {
			url: '/book',
			templateUrl: 'views/book.html',
			controller: 'bookCtrl'
		})

		.state('loan', {
			url: '/loan',
			templateUrl: 'views/loan.html'
		})

        .state('scheduling', {
			url: '/scheduling',
			templateUrl: 'views/scheduling.html'
		})

		$urlRouterProvider.otherwise('/home')
})
