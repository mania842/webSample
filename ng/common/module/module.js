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
		console.log("$location.url()", $location.url());
		console.log("$location.absUrl()", $location.absUrl());
		console.log("$location.path()", $location.path());
	});
	
	
	angular.module('myApp').controller('HomeController', 
    		function ($scope, $location, page) {
		
//		console.log("$location.path()", $location.path());
		$scope.page = page;
	});

})();
