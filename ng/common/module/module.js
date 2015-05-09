/**
 * Common App Application module
 */

(function() {
	'use strict';

	// Define our module.
	var module = angular.module('myApp', [ 'ngRoute', 'buffetModule' ]);

	// Configure app
	module.config(function($routeProvider) {
		$routeProvider.when('/', { templateUrl : 'ng/common/html/main.html' })
		.when('/test', { templateUrl : 'ng/common/html/test.html' })
		.otherwise({ redirectTo : '/' });
	});

	module.factory('page', function() {
		var title = 'default';

		return {
			title : function() {
				return title;
			},
			setTitle : function(newTitle) {
				title = newTitle;
			}
		};
	});
	
	module.run(function($location) {
		console.log("$locationpath", $location.path());
		console.log("$location", $location.absUrl().indexOf("gainesvillehomecooking.com"));
		console.log("$location", $location.absUrl());
		
		
		if ($location.absUrl().indexOf("gainesvillehomecooking.com") > -1) {
			$location.path('/buffet/menu/gainesvillehomecooking');
		}
	});
	
	
	angular.module('myApp').controller('HomeController', 
    		function ($scope, $location, page) {
		$scope.page = page;
	});

})();
