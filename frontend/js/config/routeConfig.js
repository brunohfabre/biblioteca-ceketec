angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	//$locationProvider.html5Mode(true)

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html'
		})

		.state('units', {
			url: '/units',
			templateUrl: 'views/units.html',
			controller: 'unitsCtrl'
		})

		.state('room', {
			url: '/room/{unitId}',
			templateUrl: 'views/room.html',
			controller: 'roomCtrl'
		})

		.state('student', {
			url: '/student/{roomId}',
			templateUrl: 'views/student.html',
			controller: 'studentCtrl'
		})

		.state('students', {
			url: '/students',
			templateUrl: 'views/students.html',
			controller: 'studentsCtrl'
		})

        .state('book', {
			url: '/book',
			templateUrl: 'views/book.html',
			controller: 'bookCtrl'
		})

		.state('loan', {
			url: '/loan/{bookId}',
			templateUrl: 'views/loan.html'
		})

        .state('scheduling', {
			url: '/scheduling',
			templateUrl: 'views/scheduling.html'
		})

		$urlRouterProvider.otherwise('/home')
})
