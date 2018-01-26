var app = angular.module('app', ['ui.router','ZelpServices']);
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			views: {
				'navbar': {
					templateUrl: 'templates/navbar.html',
					controller: 'navBarCtrl'
				},
				'mainview': {
					templateUrl: 'templates/home.html',
					controller: 'homeCtrl'
				},
				'footer': {
					templateUrl: 'templates/footer.html'
				}
			}
		})
		.state('cuisines', {
			url: '/:city_id/cuisines',
			views: {
				'navbar': {
					templateUrl: 'templates/navbar.html',
					controller: 'navBarCtrl'
				},
				'mainview': {
					templateUrl: 'templates/cuisines.html',
					controller: 'cuisinesCtrl'
				},
				'footer': {
					templateUrl: 'templates/footer.html'
				}
			}
		})
		.state('restaurants', {
			url: '/:city_id/restaurants',
			views: {
				'navbar': {
					templateUrl: 'templates/navbar.html',
					controller: 'navBarCtrl'
				},
				'mainview': {
					templateUrl: 'templates/restaurants.html',
					controller: 'restaurantsCtrl'
				},
				'footer': {
					templateUrl: 'templates/footer.html'
				}
			}
		})
	$urlRouterProvider.otherwise('/')
});

app.run(['$rootScope', '$stateParams', '$http',
	function ($rootScope, $stateParams, $http) {
		//Put your API key here
		$rootScope.key = '4f3c857ea271e3b540cca202855a272c';
		$http.defaults.headers.common['user-key'] = $rootScope.key;

	}
]);